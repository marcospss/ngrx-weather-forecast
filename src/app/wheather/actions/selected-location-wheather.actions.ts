import { Action } from '@ngrx/store';

export enum SelectedLocationWheatherActionTypes {
  AddLocation = '[Selected Location Wheather] Add Location',
  RemoveLocation = '[Selected Location Wheather] Remove Location'
}

export class AddLocation implements Action {
  readonly type = SelectedLocationWheatherActionTypes.AddLocation;

  constructor(public payload: any) {}
}

export class RemoveLocation implements Action {
  readonly type = SelectedLocationWheatherActionTypes.RemoveLocation;

  constructor(public payload: any) {}
}

export type SelectedLocationWheatherActionsUnion = AddLocation | RemoveLocation;
