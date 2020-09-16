import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: ""
  };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["beta"]);
      },
      err => {
        console.log(err);
        var ivlogin = true;
        alert("Please Provide Valid Credentials");
        location.reload();
      }
    );
    localStorage.setItem("user_email", this.loginUserData.email);
  }
}
