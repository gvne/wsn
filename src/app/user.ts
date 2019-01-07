import { OAuthToken } from './oauth-token';
import { KJUR } from "jsrsasign";

export class User {
  email?: string = null;
  username: string = null;
  name?: string = null;
  surname?: string = null;
  thumbnail?: string = null;


  static fromToken(token: OAuthToken) {
    let accessToken = token.access_token;
    let idToken = token.id_token;
    var payload = KJUR.jws.JWS.readSafeJSONString(atob(accessToken.split(".")[1]));
    var id = KJUR.jws.JWS.readSafeJSONString(atob(idToken.split(".")[1]));

    let user: User = {
      username: payload.sub,
      email: id.email
    };
    return user;
  }
}
