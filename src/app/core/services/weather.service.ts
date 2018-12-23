import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  searchCurrentWeather(location: string): Observable<any> {
    return this.http.get<{ list: any[] }>(
      `${
        environment.urlEndPoint
      }/find?q=${location}&type=like&sort=population&cnt=30&appid=${
        environment.APPID
      }`
    );
  }

  getForecastDaily(idLocation: string): Observable<any> {
    return this.http.get(
      `${
        environment.urlEndPoint
      }/forecast/daily/?id=${idLocation}&units=metric&appid=${
        environment.APPID
      }`
    );
  }
}
