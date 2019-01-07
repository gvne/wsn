import { OAuthToken } from './oauth-token';
import { KJUR } from "jsrsasign";

export class User {
  name: string;
  surname: string;
  email: string;
  thumbnail: string;


  static fromToken(token: OAuthToken) {
    let accessToken = token.access_token;
    var headerObj = KJUR.jws.JWS.readSafeJSONString(atob(accessToken.split(".")[0]));
    var payloadObj = KJUR.jws.JWS.readSafeJSONString(atob(accessToken.split(".")[1]));
    console.log(payloadObj);
    return null;
  }
}
