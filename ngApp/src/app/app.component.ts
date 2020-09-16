import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';
  public name="";
  constructor(private _authService: AuthService) { }
}
