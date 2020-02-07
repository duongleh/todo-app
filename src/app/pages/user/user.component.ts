import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';
import { Constants } from 'src/app/shared/constant';
import { AuthService } from '../../auth/auth.service';
import { UserAuthService } from '../../shared/services/user-auth/user-auth.service';
import { SnackbarService } from '../../shared/services/snackbar/snackbar.service';

export function checkPasswords(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];

    if (matchingControl.errors && !matchingControl.errors.passwordsDoNotMatch) {
      return; // return if another validator has already found an error on the matchingControl
    }
    if (control.value !== matchingControl.value) { // set error on matchingControl if validation fails
      matchingControl.setErrors({ passwordsDoNotMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserAuthService]
})
export class UserComponent implements OnInit {
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  public formLogIn: FormGroup;
  public formSignUp: FormGroup;

  public pwHide1 = true;
  public pwHide2 = true;
  public pwHide3 = true;
  public siteKey = Constants.siteKey;
  public selectedTab = 0;
  public isLoading = false;

  constructor(
    private router: Router, private fb: FormBuilder, private userAuthService: UserAuthService,
    private authService: AuthService, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.formLogIn = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });

    this.formSignUp = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      // recaptcha: ['', Validators.required]
    }, { validator: checkPasswords('password', 'confirmPassword') });
  }

  onLogIn() {
    this.isLoading = true;
    this.userAuthService.logIn(this.formLogIn.value).subscribe((response: any) => {
      if (response.success) {
        this.authService.login();
        this.snackbarService.createSnackbar('Login Success', `Welcome back, ${this.formLogIn.value.username} !`, 'success-snackbar');
        sessionStorage.setItem('user', JSON.stringify({
          username: this.formLogIn.value.username,
          userID: response.userId,
          token: response.token
        }));
        this.router.navigate(['/todo']);
        this.isLoading = false;
      }
    }, error => {
      this.captchaElem.resetCaptcha();
      if (error.error.message) this.snackbarService.createSnackbar(error.error.message, 'RETRY', 'error-snackbar');
      else if (error.message) this.snackbarService.createSnackbar(error.message, 'RETRY', 'error-snackbar');
      this.isLoading = false;
    });
  }

  onSignUp(formDirective: FormGroupDirective) {
    this.isLoading = true;
    this.userAuthService.signUp(this.formSignUp.value).subscribe((response: any) => {
      if (response.success) {
        formDirective.resetForm();
        this.formSignUp.reset();
        this.snackbarService.createSnackbar('Sign Up Success', 'CONGRATS', 'success-snackbar');
        this.selectedTab = 0;
      } else {
        this.snackbarService.createSnackbar(response.message, 'RETRY', 'error-snackbar');
      }
      this.isLoading = false;

    }, error => {
      if (error.error.message) this.snackbarService.createSnackbar(error.error.message, 'RETRY', 'error-snackbar');
      else if (error.message) this.snackbarService.createSnackbar(error.message, 'RETRY', 'error-snackbar');
      this.isLoading = false;
    });
  }

  getErrorMessageLogIn(field: string) {
    return this.formLogIn.controls[field].errors.required ? 'You must enter a value' :
      this.formLogIn.controls[field].errors.minlength ? 'Length is not valid' : '';
  }

  getErrorMessageSignUp(field: string) {
    return this.formSignUp.controls[field].errors.required ? 'You must enter a value' :
      this.formSignUp.controls[field].errors.email ? 'Not a valid email' :
        this.formSignUp.controls[field].errors.minlength ? 'Length is not valid' :
          this.formSignUp.controls[field].errors.passwordsDoNotMatch ? 'Passwords do not match' : '';
  }

}