import { Component, OnInit } from "@angular/core";
import { GamesService } from "../games.service";

@Component({
  selector: "app-beta",
  templateUrl: "./beta.component.html",
  styleUrls: ["./beta.component.css"]
})
export class BetaComponent {
  public ReportFlag = false;

  OnReport() {
    if (this.ReportFlag === false) {
      this.ReportFlag = true;
    } else {
      this.ReportFlag = false;
    }
  }

  games = [];
  constructor(private _gamesService: GamesService) {}

  ngOnInit() {
    this._gamesService.getGames().subscribe(
      res => ((this.games = res), console.log(this.games)),
      err => console.log(err)
    );
  }
}
