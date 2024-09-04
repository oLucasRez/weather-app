import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/interfaces/weather-data.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'aaaabbbbccccddddeeeeffffgggghhhh';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', cityName);
    url.searchParams.append('units', 'metric');
    url.searchParams.append('mode', 'json');
    url.searchParams.append('appid', this.apiKey);

    return this.http.get<WeatherData>(url.toString(), {});
  }
}
