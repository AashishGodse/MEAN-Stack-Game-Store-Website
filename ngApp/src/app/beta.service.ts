import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BetaService {
  private _betaUrl = "http://localhost:3000/api/beta"

  constructor(private http: HttpClient) { }
    getBeta(){
      return this.http.get<any>(this._betaUrl)
    }
  
}
