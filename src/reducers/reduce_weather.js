import { FETCH_WEATHER_SUCCESS } from "../actions/index";
import { FETCH_WEATHER_FAILED, FETCH_WEATHER_REQUEST } from "../actions";

const initialState = {
  isLoading: false,
  searchTerm: null,
  results: [],
  errors: [],
};

const reduce_weather = (state = initialState, action) => {
  switch (action.type) {
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
        results:
          action.payload.searchTerm === state.searchTerm
            ? [action.payload.response.data, ...state.results]
            : state.results,
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
