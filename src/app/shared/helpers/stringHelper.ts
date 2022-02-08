import {BaseHelper} from "./baseHelper";

export abstract class StringHelper extends BaseHelper {
  public static isNullOrWhitespace(str: string) {
    return str === null || (/^\s*$/).test(str);
  }
}
