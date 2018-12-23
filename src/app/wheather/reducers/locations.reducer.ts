import { ViewLocationPageActions, LocationsApiActions } from './../actions';

import { Details } from './../models/wheather.model';

export interface State {
  selectedLocationId: string | null;
  forecast: Details;
  loading: boolean;
  error: string;
}

export const initialState: State = {
  selectedLocationId: null,
  forecast: null,
  loading: false,
  error: ''
};

export function reducer(
  state = initialState,
  action:
    | ViewLocationPageActions.ViewLocationPageActionsUnion
    | LocationsApiActions.LocationsApiActionsUnion
): State {
  switch (action.type) {
    case ViewLocationPageActions.ViewLocationPageActionTypes.SelectLocation: {
      return {
        ...state,
        selectedLocationId: action.payload,
        loading: false,
        error: ''
      };
    }

    case LocationsApiActions.LocationsApiActionTypes.LoadLocationsSuccess: {
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        error: ''
      };
    }

    case LocationsApiActions.LocationsApiActionTypes.LoadLocationsFailure: {
      return {
        ...state,
        loading: false,
        error: ''
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedLocationId = (state: State) => state.selectedLocationId;

export const getForecast = (state: State) => state.forecast;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
