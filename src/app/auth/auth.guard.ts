import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private snackbarService: SnackbarService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.checkLogin();

    if (this.authService.isLoggedIn && next.url[0].path === 'user') {
      // this.router.navigateByUrl('todo');
      this.snackbarService.createSnackbar('You are already logged in', 'LOG OUT', 'error-snackbar', 'logout');
    } else if (!this.authService.isLoggedIn && next.url[0].path !== 'user') {
      this.router.navigateByUrl('user');
      this.snackbarService.createSnackbar('Please log in to continue', 'LOG IN', 'error-snackbar');
    }
    return this.authService.isLoggedIn;
  }

}
