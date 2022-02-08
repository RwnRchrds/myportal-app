import {JwtPayload} from "jwt-decode";

export interface JwtPayloadExtended extends JwtPayload
{
  type?: number;
}
