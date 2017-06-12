import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticatorService implements CanActivate {

  private isLoggedIn = false;

  constructor() { }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }
}
