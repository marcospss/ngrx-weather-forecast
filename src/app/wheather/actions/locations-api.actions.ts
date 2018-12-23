import { Action } from '@ngrx/store';
import { Details } from './../models/wheather.model';

export enum LocationsApiActionTypes {
  AddLocationSuccess = '[Locations/API] Add Location Success',
  AddLocationFailure = '[Locations/API] Add Location Failure',
  RemoveLocationSuccess = '[Locations/API] Remove Location Success',
  RemoveLocationFailure = '[Locations/API] Remove Location Failure',
  LoadLocationsSuccess = '[Locations/API] Load Locations Success',
  LoadLocationsFailure = '[Locations/API] Load Locations Failure'
}

/**
 * Add Location to Locations Actions
 */
export class AddLocationSuccess implements Action {
  readonly type = LocationsApiActionTypes.AddLocationSuccess;

  constructor(public payload: Details) {}
}

export class AddLocationFailure implements Action {
  readonly type = LocationsApiActionTypes.AddLocationFailure;

  constructor(public payload: Details) {}
}

/**
 * Remove Location from Locations Actions
 */
export class RemoveLocationSuccess implements Action {
  readonly type = LocationsApiActionTypes.RemoveLocationSuccess;

  constructor(public payload: Details) {}
}

export class RemoveLocationFailure implements Action {
  readonly type = LocationsApiActionTypes.RemoveLocationFailure;

  constructor(public payload: any) {}
}

/**
 * Load Locations Actions
 */
export class LoadLocationsSuccess implements Action {
  readonly type = LocationsApiActionTypes.LoadLocationsSuccess;

  constructor(public payload: Details) {}
}

export class LoadLocationsFailure implements Action {
  readonly type = LocationsApiActionTypes.LoadLocationsFailure;

  constructor(public payload: any) {}
}

export type LocationsApiActionsUnion =
  | AddLocationSuccess
  | AddLocationFailure
  | RemoveLocationSuccess
  | RemoveLocationFailure
  | LoadLocationsSuccess
  | LoadLocationsFailure;
