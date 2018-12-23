import { Action } from '@ngrx/store';

export enum LocationActionTypes {
  LoadLocation = '[Location Exists Guard] Load Location',
}

export class LoadLocation implements Action {
  readonly type = LocationActionTypes.LoadLocation;

  constructor(public payload: any) {}
}

export type LocationActionsUnion = LoadLocation;
