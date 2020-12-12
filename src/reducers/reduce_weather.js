import {
  FETCH_INITIAL_WEATHER_REQUEST,
  FETCH_INITIAL_WEATHER_SUCCESS,
  FETCH_INITIAL_WEATHER_FAILED,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from "../actions";

const initialState = {
  isLoading: false,
  searchTerm: null,
  results: [],
  errors: [],
};

const reduce_weather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIAL_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        searchTerm: action.payload.city,
      };

    case FETCH_INITIAL_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: [action.payload.response.data, ...state.results],
      };

    case FETCH_INITIAL_WEATHER_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: [action.payload.error, ...state.errors],
      };

    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        searchTerm: action.payload.city,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: [action.payload.response.data, ...state.results],
      };

    case FETCH_WEATHER_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: [action.payload.error, ...state.errors],
      };

    default:
      return state;
  }
};

export default reduce_weather;
