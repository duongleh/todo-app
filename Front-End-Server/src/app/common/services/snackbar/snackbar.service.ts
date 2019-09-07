import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  setAutoHide = true;
  autoHide = 5000;
  action = true;
  addExtraClass = true;

  createSnackbar(message: string, actionButtonLabel: string, extraClass: string, action?: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = this.addExtraClass ? [extraClass] : undefined;
    const snackBarRef = this.snackBar.open(message, this.action ? actionButtonLabel : undefined, config);
    if (action === 'logout') {
      snackBarRef.onAction().subscribe(() => {
        // logout
        sessionStorage.removeItem('account');
        this.router.navigateByUrl('user');
      });
    }
  }
  constructor(public snackBar: MatSnackBar, private router: Router) { }
}
