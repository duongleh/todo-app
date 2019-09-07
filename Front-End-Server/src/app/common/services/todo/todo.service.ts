import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public url = environment.domain.todo;

  public httpOptions = {
    headers: new HttpHeaders({
      'auth-token': JSON.parse(sessionStorage.getItem('account')).token
    })
  };

  getTodo() {
    return this.http.get(`${this.url}/${JSON.parse(sessionStorage.getItem('account')).userID}`, this.httpOptions);
  }

  postTodo(data: any) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  updateTodo(data: any) {
    return this.http.put(this.url, data, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
