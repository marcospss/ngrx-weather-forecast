import { WheatherApiActions, FindLocationWheatherActions } from './../actions';
import { Location } from './../models/wheather.model';

export interface State {
  locations: Location[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  locations: [],
  loading: false,
  error: '',
  query: ''
};

export function reducer(
  state = initialState,
  action:
    | WheatherApiActions.WeatherApiActionsUnion
    | FindLocationWheatherActions.FindLocationWheatherActionsUnion
): State {
  switch (action.type) {
    case FindLocationWheatherActions.FindLocationWheatherActionTypes
      .SearchLocations: {
      const query = action.payload;

      if (query === '') {
        return {
          locations: [],
          loading: false,
          error: '',
          query
        };
      }
      return {
        ...state,
        loading: true,
        error: '',
        query
      };
    }

    case WheatherApiActions.WeatherApiActionTypes.SearchSuccess: {
      return {
        locations: action.payload['list'],
        loading: false,
        error: '',
        query: state.query
      };
    }

    case WheatherApiActions.WeatherApiActionTypes.SearchFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getLocations = (state: State) => state.locations;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
