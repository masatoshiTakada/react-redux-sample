import { call, put, takeEvery } from 'redux-saga/effects';
import {
  REQUEST_FETCH,
  REQUEST_REFETCH,
  succeedFetch,
  failedFetch,
  succeedReFetch,
  failedReFetch,
} from './action';
import { Api } from './api';

// 初期API操作
function* fetchData() {
  const { res, error } = yield call(Api);
  if (res) {
    yield put(succeedFetch(res));
  } else {
    yield put(failedFetch(error));
  }
}

// 再レンダーAPI操作
function* refetchData() {
  const { res, error } = yield call(Api);
  if (res) {
    yield put(succeedReFetch(res));
  } else {
    yield put(failedReFetch(error));
  }
}

const mySaga = [
  takeEvery(REQUEST_FETCH, fetchData),
  takeEvery(REQUEST_REFETCH, refetchData),
];

export default mySaga;
