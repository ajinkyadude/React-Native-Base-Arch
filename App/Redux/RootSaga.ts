import {all, takeLatest} from 'redux-saga/effects';
import {AsyncAction} from '../Module/Feed/Store/Async-action';

export function* RootSaga() {
  // yield all([startValueChangeWatcher()])
  yield takeLatest('Feed/changeStartValue', AsyncAction);
}
