import { Component, OnInit } from '@angular/core';
import{GamesService} from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public view=1;
  games=[]
  public name="";

  constructor(private _gamesService: GamesService) { }
  

  ngOnInit() {
    this._gamesService.getGames()
      .subscribe(
        res => this.games = res,
        err => console.log(err)
      )
  }
  OnAndroid()
  {
    this.view=1;
  }
  OnPc()
  {
    this.view=2;
  }
  OnXbox()
  {
    this.view=3;
  }

}
