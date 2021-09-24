import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  alreadyLoggedIn: boolean;

  canActivate(): boolean {
    this.alreadyLoggedIn = true;

    if (this.alreadyLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
