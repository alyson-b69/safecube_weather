import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "../actions/index";
import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  return axios.get(url);
}

export function* fetchWeatherSaga(action) {
  try {
    const response = yield call(fetchWeather, action.payload.city);
    yield put({ type: FETCH_WEATHER_SUCCESS, payload: response });
  } catch (err) {
    console.log(err);
  }
}

export function* watcherSagas() {
  yield all([yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga)]);
}
