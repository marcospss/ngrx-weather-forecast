import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'mps-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  @Output() searchLocation = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
