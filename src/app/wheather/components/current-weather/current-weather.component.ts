import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mps-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Output()
  addLocation = new EventEmitter<string>();
  @Output()
  removeLocation = new EventEmitter<string>();
  @Input()
  locations: any[];
  constructor() {}

  ngOnInit() {}
}
