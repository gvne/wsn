import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  Router,
  NavigationStart,
  DefaultUrlSerializer,
  Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { authClient, authConfig } from '../environments/auth.environment';
import { User, UserDetails } from './user';
import { OAuthToken } from './oauth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: User = null;
  // loggedInUser: User = {
  //   name: "vincke",
  //   surname: "guillaume",
  //   email: "guillaume.vincke@gmail.com",
  //   thumbnail: "https://picsum.photos/200/200"
  // };

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private http: HttpClient
  ) {
    this.finalizeLogin();
  }

  login(): void {
    this.redirectToLoginPage();
  }

  logout(): void {
    this.loggedInUser = null;
  }

  /**
   * Following the oauth2 flow, we need to redirect the user to the
   * authentication server login page
   */
  private redirectToLoginPage() {
    let uri = authConfig.loginEndpoint +
              "?client_id=" + authClient.id +
              "&response_type=code" +
              "&redirect_uri=" + this.getRedirectURI();
    this.document.location.href = uri;
  }

  /**
   * After a successful login on the authentication server, the user will be
   * redirected back to the application. We should use the current hostname
   * as redirect uri
   */
  private getRedirectURI() {
    return location.protocol + '//' + location.host + location.pathname;
  }

  /**
   * When the authentication server sends the user back to the application,
   * we need to get the 'code' query token and exchange it to a valid access
   * token.
   * That's what we do in the login finalization.
   * This should be called when the page is loaded. Therefore we just need to
   * return if no code can be found in the url or if we are already logged in
   */
  finalizeLogin() {
    if (this.loggedInUser) {
      return;
    }

    this.getQueryToken().subscribe(
      queryParams => {
        if (!('code' in queryParams)) {
          return;
        }
        this.exchangeCodeToAccessToken(queryParams["code"]).subscribe(
          token => {
            this.loggedInUser = User.fromToken(token);
            // read the extra details
            this.http.get<UserDetails>(
              authConfig.detailEndpoint + this.loggedInUser.username
            ).subscribe(
              userDetails => {
                this.loggedInUser.name = userDetails.family_name;
                this.loggedInUser.surname = userDetails.name;
              }
            )
          }
        )
      }
    );
  }

  /**
   * return the current URL query token
   * This is used when the authentication server redirects back to the
   * application with a 'code' query token that will be used to redeem an
   * access token
   */
  private getQueryToken(): Observable<Params> {
    return new Observable((observer) => {
      // queryParams always fires twice.
      // see https://github.com/angular/angular/issues/13804
      this.router.events.subscribe(
        event => {
          // Only run once through this. Any other event can be forgotten
          if (!(event instanceof NavigationStart)) {
            return;
          }

          // parse the event URL
          let serializer = new DefaultUrlSerializer();
          let tree = serializer.parse(event.url);
          let queryParams = tree.queryParams;

          observer.next(queryParams);
          observer.complete();
        }
      );
      return () => {};
    });
  }

  /**
   * In the OAuth flow, after a successful user login, we are redirected back
   * to the application with a code that we can exchange into an access token
   * That function does the exchange
   */
   private exchangeCodeToAccessToken(code: string): Observable<OAuthToken> {
     const httpOptions = {
       headers: this.makeAuthenticationHeaders()
     };
     return this.http.post<OAuthToken>(
       authConfig.tokenEndpoint,
       "grant_type=authorization_code" +
       "&code=" + code +
       "&redirect_uri=" + this.getRedirectURI() +
       "&client_id=" + authClient.id,
       httpOptions
     );
   }

   /**
    * When exchanging the code to an access token, we need to give the client
    * id and secret in the authorization token.
    * That function build the Headers to be sent with the exchange query
    */
   private makeAuthenticationHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': "Basic " + btoa(authClient.id + ":" + authClient.secret),
      'content-type': 'application/x-www-form-urlencoded'
    });
  }
}
