import { OAuthToken } from './oauth-token';
import { KJUR } from "jsrsasign";

export class User {
  email?: string = null;
  username: string = null;
  family_name?: string = null;
  name?: string = null;
  thumbnail?: string = null;


  static fromToken(token: OAuthToken) {
    let accessToken = token.access_token;
    let idToken = token.id_token;
    var payload = KJUR.jws.JWS.readSafeJSONString(atob(accessToken.split(".")[1]));
    var id = KJUR.jws.JWS.readSafeJSONString(atob(idToken.split(".")[1]));
    
    let user: User = {
      id: payload.username,
      username: payload.sub,
      email: id.email
    };
    return user;
  }
}

/**
 * The output of the User api detail enpoint
 */
export interface UserDetails {
  family_name: string;
  name: string;
}
