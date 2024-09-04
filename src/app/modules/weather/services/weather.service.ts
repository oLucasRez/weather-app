import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'a611c09621c7443f0ff2e9d8b351707e';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', cityName);
    url.searchParams.append('units', 'metric');
    url.searchParams.append('mode', 'json');
    url.searchParams.append('appid', this.apiKey);

    return this.http.get(url.toString(), {});
  }
}
