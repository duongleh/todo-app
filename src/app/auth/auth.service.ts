import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  checkLogin() {
    if (sessionStorage.getItem('user') !== null) { this.isLoggedIn = true; } else { this.isLoggedIn = false; }
  }
}
