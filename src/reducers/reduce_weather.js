import { FETCH_WEATHER_SUCCESS } from "../actions/index";

const reduce_weather = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default reduce_weather;
