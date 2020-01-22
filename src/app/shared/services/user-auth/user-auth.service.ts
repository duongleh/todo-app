import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  public url = environment.endpoint.user;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  logIn(data: any) {
    return this.http.post(`${this.url}/login`, data, this.httpOptions);
  }

  signUp(data: any) {
    return this.http.post(`${this.url}/signup`, data, this.httpOptions);
  }

  logout() {
    return sessionStorage.removeItem('user');
  }

  constructor(private http: HttpClient) { }

}
