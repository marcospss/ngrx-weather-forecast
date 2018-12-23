import { Action } from '@ngrx/store';
import { Details } from './../models/wheather.model';

export enum LocationPageActionTypes {
  LoadLocation = '[Location Page] Load Location'
}

export class LoadLocation implements Action {
  readonly type = LocationPageActionTypes.LoadLocation;

  constructor(public payload: Details) {}
}

export type LocationPageActionsUnion = LoadLocation;
