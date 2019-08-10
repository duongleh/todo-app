import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  sendToserver(data: any) {
    const url = `${environment.domain.user}/signup`;
    return this.http.post(url, data, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
