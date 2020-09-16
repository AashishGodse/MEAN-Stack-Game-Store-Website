import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GamesService {
  private _gamesUrl = "http://localhost:3000/api/viewup";

  constructor(private http: HttpClient) {}
  getGames() {
    return this.http.get<any>(this._gamesUrl);
  }
}
