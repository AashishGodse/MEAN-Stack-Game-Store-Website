import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-android-games',
  templateUrl: './android-games.component.html',
  styleUrls: ['./android-games.component.css']
})
export class AndroidGamesComponent implements OnInit {

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
