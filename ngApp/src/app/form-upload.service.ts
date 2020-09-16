import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Upload } from "./developer-upload/upload";
@Injectable({
  providedIn: "root"
})
export class FormUploadService {
  _url = "http://localhost:3000/api/uploads";
  constructor(private _http: HttpClient) {}
  Upload(udata) {
    return this._http.post<any>(this._url, udata);
  }
}
