import { Action } from '@ngrx/store';

export enum ViewLocationPageActionTypes {
  SelectLocation = '[View Location Page] Select Location',
}

export class SelectLocation implements Action {
  readonly type = ViewLocationPageActionTypes.SelectLocation;

  constructor(public payload: string) {}
}

export type ViewLocationPageActionsUnion = SelectLocation;
