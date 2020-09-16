import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }
  canActivate(): boolean {
    if (this._authService.loggedin()) {
      console.log('true')
      return true
    } else {
      console.log('false')
      this._router.navigate(['/login'])
      return false
    }
  }
}