import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLocations from './../../reducers';
import { Details } from './../../../wheather/models/wheather.model';
@Component({
  selector: 'mps-selected-location-page',
  template: `
    <mps-location-detail
      [forecast]="forecast$ | async"
    >
    </mps-location-detail>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedLocationPageComponent {
  forecast$: Observable<Details>;
  isLoadForecastDetails$: Observable<boolean>;

  constructor(store: Store<fromLocations.State>) {
    this.forecast$ = store.pipe(
      select(fromLocations.getForecast)
    ) as Observable<Details>;
  }
}
