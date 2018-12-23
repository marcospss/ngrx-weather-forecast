import { Action } from '@ngrx/store';

export enum WeatherApiActionTypes {
  SearchSuccess = '[Weather/API] Search Success',
  SearchFailure = '[Weather/API] Search Failure'
}

export class SearchSuccess implements Action {
  readonly type = WeatherApiActionTypes.SearchSuccess;

  constructor(public payload: any[]) {}
}

export class SearchFailure implements Action {
  readonly type = WeatherApiActionTypes.SearchFailure;

  constructor(public payload: string) {}
}

export type WeatherApiActionsUnion = SearchSuccess | SearchFailure;
