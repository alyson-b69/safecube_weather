import {
  FETCH_INITIAL_WEATHER_REQUEST,
  FETCH_INITIAL_WEATHER_SUCCESS,
  FETCH_INITIAL_WEATHER_FAILED,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from "../actions/index";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function fetchInitialWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  return axios.get(url);
}

export function* fetchInitialWeatherSaga(action) {
  try {
    const response = yield call(fetchInitialWeather, action.payload.city);
    yield put({
      type: FETCH_INITIAL_WEATHER_SUCCESS,
      payload: { response, searchTerm: action.payload.city },
    });
  } catch (err) {
    yield put({ type: FETCH_INITIAL_WEATHER_FAILED, payload: { error: err } });
  }
}

function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  return axios.get(url);
}

export function* fetchWeatherSaga(action) {
  try {
    const response = yield call(fetchWeather, action.payload.city);
    yield put({
      type: FETCH_WEATHER_SUCCESS,
      payload: { response, searchTerm: action.payload.city },
    });
  } catch (err) {
    yield put({ type: FETCH_WEATHER_FAILED, payload: { error: err } });
  }
}

export function* watcherSagas() {
  yield all([
    yield takeEvery(FETCH_INITIAL_WEATHER_REQUEST, fetchInitialWeatherSaga),
  ]);
  yield all([yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga)]);
}
