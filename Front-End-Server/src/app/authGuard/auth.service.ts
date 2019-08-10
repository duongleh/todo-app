import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  checkLogin() {
    if (sessionStorage.getItem('account') !== null) { this.isLoggedIn = true; } else { this.isLoggedIn = false; }
  }
  constructor() { }

}
