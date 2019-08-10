import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class NegateAuthGuard implements CanActivate {
  constructor(private authGuard: AuthGuard) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.authGuard.canActivate(route, state);
  }

}

