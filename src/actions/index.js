export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
    FETCH_WEATHER_FAILED = "FETCH_WEATHER_FAILED";

export function fetchWeather(city) {
  return {
    type: FETCH_WEATHER_REQUEST,
    payload: { city },
  };
}

export function initialfetchWeather(citiesId) {
  return {
    type: FETCH_WEATHERS_REQUEST,
    payload: { citiesId },
  };
}
