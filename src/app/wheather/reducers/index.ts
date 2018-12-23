import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fromRoot from './../../reducers';
import * as fromLocations from './locations.reducer';
import * as fromSearch from './search.reducer';
export interface WheatherState {
  locations: fromLocations.State;
  search: fromSearch.State;
}

export interface State extends fromRoot.State {
  wheather: WheatherState;
}

export const reducers: ActionReducerMap<WheatherState, any> = {
  locations: fromLocations.reducer,
  search: fromSearch.reducer
};

export const getWheatherState = createFeatureSelector<State, WheatherState>(
  'wheather'
);

/**
 * Search Locations
 */
export const getSearchState = createSelector(
  getWheatherState,
  (state: WheatherState) => state.search
);

export const getSearchLocations = createSelector(
  getSearchState,
  fromSearch.getLocations
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

/**
 * Locations
 */

export const getLocationState = createSelector(
  getWheatherState,
  (state: WheatherState) => state.locations
);

export const getLocationId = createSelector(
  getLocationState,
  fromLocations.getSelectedLocationId
);

export const getForecast = createSelector(
  getLocationState,
  fromLocations.getForecast
);
