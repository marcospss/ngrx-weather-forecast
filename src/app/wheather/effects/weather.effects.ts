import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, EMPTY as empty } from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  skip,
  takeUntil,
  mergeMap
} from 'rxjs/operators';

import {
  WheatherApiActions,
  FindLocationWheatherActions,
  ViewLocationPageActions,
  LocationsApiActions
} from '../actions';
import { WeatherService } from '@core/services/weather.service';
import { Location, Details } from './../models/wheather.model';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<FindLocationWheatherActions.SearchLocations>(
      FindLocationWheatherActions.FindLocationWheatherActionTypes
        .SearchLocations
    ),
    map(action => action.payload),
    mergeMap(query => {
      return this.weatherService.searchCurrentWeather(query).pipe(
        map(
          (locations: Location[]) =>
            new WheatherApiActions.SearchSuccess(locations)
        ),
        catchError(err => of(new WheatherApiActions.SearchFailure(err)))
      );
    })
  );

  @Effect()
  forecastDaily$: Observable<Action> = this.actions$.pipe(
    ofType<ViewLocationPageActions.SelectLocation>(
      ViewLocationPageActions.ViewLocationPageActionTypes.SelectLocation
    ),
    map(action => action.payload),
    mergeMap(idLocation => {
      return this.weatherService.getForecastDaily(idLocation).pipe(
        map(
          (forecast: Details) =>
            new LocationsApiActions.LoadLocationsSuccess(forecast)
        ),
        catchError(err => of(new LocationsApiActions.LoadLocationsFailure(err)))
      );
    })
  );
}
