import { Action } from '@ngrx/store';

export enum SelectedLocationPageActionTypes {
  AddLocation = '[Selected Location Page] Add Location',
  RemoveLocation = '[Selected Location Page] Remove Location',
}

export class AddLocation implements Action {
  readonly type = SelectedLocationPageActionTypes.AddLocation;

  constructor(public payload: any) {}
}

export class RemoveLocation implements Action {
  readonly type = SelectedLocationPageActionTypes.RemoveLocation;

  constructor(public payload: any) {}
}

export type SelectedBookPageActionsUnion = AddLocation | RemoveLocation;
