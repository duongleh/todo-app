import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getTemp(city: string) {
    const url = `${environment.endpoint.weather}${city}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
}
