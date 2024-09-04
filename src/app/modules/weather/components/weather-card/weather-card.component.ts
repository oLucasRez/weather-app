import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/interfaces/weather-data.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData!: WeatherData;

  ngOnInit(): void {
    console.log('dados recebidos', this.weatherData);
  }
}
