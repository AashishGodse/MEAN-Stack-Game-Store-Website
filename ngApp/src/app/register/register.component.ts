import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: ""
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["beta"]);
      },

      err => console.log(err)
    );

    localStorage.setItem("user_email", this.registerUserData.email);
  }
}
