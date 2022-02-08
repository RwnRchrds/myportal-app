import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";
import {StringResponseModel} from "../../models/response/stringResponseModel";

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends ApiService {
  getLocalSchoolName(): Observable<string> {
    return this.http.get<StringResponseModel>(`${this.basePath}/api/schools/local/name`).pipe(map((response: StringResponseModel) => {
      return response.value;
    }));
  }
}
