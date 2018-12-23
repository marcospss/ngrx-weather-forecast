import { Component, Input } from '@angular/core';
import { Details } from './../../models/wheather.model';

@Component({
  selector: 'mps-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  @Input()
  forecast: Details;

  // get city() {
  //   return this.forecast.city.name;
  // }

  // get country() {
  //   return this.forecast.city.country;
  // }
}
