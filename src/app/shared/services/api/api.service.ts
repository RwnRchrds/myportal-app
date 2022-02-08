import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {BASE_PATH} from "../../variables";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected basePath: string;

  constructor(protected http: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string) {
    this.basePath = basePath;
  }
}
