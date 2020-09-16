import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-xbox-games',
  templateUrl: './xbox-games.component.html',
  styleUrls: ['./xbox-games.component.css']
})
export class XboxGamesComponent implements OnInit {

  games = []
  constructor(private _gamesService: GamesService) { }

  ngOnInit() {
    this._gamesService.getGames()
      .subscribe(
        res => (this.games = res, console.log(this.games)),
        err => console.log(err),
      )
  }

}
