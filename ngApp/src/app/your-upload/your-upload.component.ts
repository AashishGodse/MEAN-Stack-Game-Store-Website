import { Component, OnInit } from "@angular/core";
import { GamesService } from "../games.service";
import { DelupService } from "../delup.service";

@Component({
  selector: "app-your-upload",
  templateUrl: "./your-upload.component.html",
  styleUrls: ["./your-upload.component.css"]
})
export class YourUploadComponent implements OnInit {
  games = [];
  user_email: any;
  chkup = "";
  count = 0;
  constructor(
    private _gamesService: GamesService,
    private _deService: DelupService
  ) {}

  ngOnInit() {
    this._gamesService.getGames().subscribe(
      res => (
        (this.games = res),
        console.log(this.games),
        console.log(this.games.length)
      ),
      err => console.log(err)
    );
    this.user_email = localStorage.getItem("user_email");

    // console.log(this.games.length);
    // for (let i = 0; i < this.games.length; i++) {
    //   if (this.games[i].Email == this.user_email) {
    //     this.count += 1;
    //     break;
    //   }
    // }
  }
  delete(obj) {
    if (confirm("Press OK to Delete " + obj.GameTitle + " Permentally")) {
      this._deService.deleteUpload(obj).subscribe(
        res => console.log(res),
        err => console.log(err)
      );

      location.reload();
    } else {
      "You pressed Cancel!";
    }
  }
}
