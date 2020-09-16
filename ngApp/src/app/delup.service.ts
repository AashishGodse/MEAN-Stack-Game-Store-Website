import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DelupService {
  private _delupUrl = "http://localhost:3000/api/delup";
  constructor(private http: HttpClient) {}

  deleteUpload(data) {
    return this.http.post<any>(this._delupUrl, data);
  }
}
