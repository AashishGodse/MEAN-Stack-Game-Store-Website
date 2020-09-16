import { Component, OnInit } from "@angular/core";
import { GamesService } from "../games.service";

@Component({
  selector: "app-pc-games",
  templateUrl: "./pc-games.component.html",
  styleUrls: ["./pc-games.component.css"]
})
export class PcGamesComponent implements OnInit {
  games = [];
  constructor(private _gamesService: GamesService) {}

  ngOnInit() {
    this._gamesService.getGames().subscribe(
      res => ((this.games = res), console.log(this.games)),
      err => console.log(err)
    );
  }
}
