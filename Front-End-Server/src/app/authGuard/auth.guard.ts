import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from '../common/services/snackbar/snackbar.service';
import { PreviousRouteService } from './previous-route.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private snackbarService: SnackbarService, private previousRouteService: PreviousRouteService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.checkLogin();

    if (this.authService.isLoggedIn && route.url[0].path === 'user') {
      // this.router.navigateByUrl('todo');
      this.snackbarService.creatSnackbar('You are already logged in', 'LOG OUT', 'error-snackbar', 'logout');
    } else if (!this.authService.isLoggedIn && route.url[0].path !== 'user') {
      this.router.navigateByUrl('user');
      this.snackbarService.creatSnackbar('Please log in to continue', 'LOG IN', 'error-snackbar');
    }
    return this.authService.isLoggedIn;
  }

}
