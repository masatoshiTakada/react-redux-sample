import { all } from 'redux-saga/effects';
import mySaga from './main/saga';

export default function* rootSaga() {
  yield all([
    ...mySaga,
  ]);
}
