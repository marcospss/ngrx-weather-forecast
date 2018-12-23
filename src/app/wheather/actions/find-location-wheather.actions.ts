import { Action } from '@ngrx/store';

export enum FindLocationWheatherActionTypes {
  SearchLocations = '[Find Location Wheather] Search Locations'
}

export class SearchLocations implements Action {
  readonly type = FindLocationWheatherActionTypes.SearchLocations;

  constructor(public payload: string) {}
}

export type FindLocationWheatherActionsUnion = SearchLocations;
