import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public url = environment.endpoint.todo;
  public token = JSON.parse(sessionStorage.getItem('user')).token;
  public userID = JSON.parse(sessionStorage.getItem('user')).userID;

  public httpOptions = {
    headers: new HttpHeaders({
      'auth-token': this.token
    })
  };

  getTodo() {
    return this.http.get(`${this.url}/${this.userID}`, this.httpOptions);
  }

  postTodo(data: any) {
    return this.http.post(this.url, { userId: this.userID, data }, this.httpOptions);
  }

  updateTodo(data: any) {
    return this.http.put(this.url, { userId: this.userID, data }, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
