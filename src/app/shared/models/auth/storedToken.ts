import {GetTokenResponseModel} from "../response/getTokenResponseModel";
import jwtDecode from "jwt-decode";
import {JwtPayloadExtended} from "./jwtPayloadExtended";
import {UserTypes} from "./userTypes";

export class StoredToken {
  accessToken: string;
  refreshToken: string;
  expires: Date;
  tokenType: string;
  scope: string;
  type: UserTypes;

  constructor(response: GetTokenResponseModel) {
    let tokenInfo = jwtDecode<JwtPayloadExtended>(response.access_token);
    this.accessToken = response.access_token;
    this.refreshToken = response.refresh_token;
    this.tokenType = response.token_type;
    this.scope = response.scope;
    this.expires = new Date(tokenInfo.exp * 1000);
    this.type = tokenInfo.type;
  }
}
