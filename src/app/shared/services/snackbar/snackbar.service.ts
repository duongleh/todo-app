import { Injectable } from '@angular/core';
import { UserAuthService } from '../user-auth/user-auth.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public setAutoHide = true;
  public autoHide = 5000;
  public action = true;
  public addExtraClass = true;

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
        this.userAuthService.logout();
        this.router.navigateByUrl('user');
      });
    }
  }
  constructor(public snackBar: MatSnackBar, private router: Router, private userAuthService: UserAuthService) { }
}
