import {put, takeLatest} from 'redux-saga/effects';
import {changeStartValue} from './Reducer';
import { SubmitLoginAction } from './Create-Async-Action';

export function* AsyncAction(actions: any) {
  console.log('Asunc action call *******     ' + JSON.stringify(actions));
  yield put(SubmitLoginAction())
}

// export function* startValueChangeWatcher() {
//     console.log(" saga function ****");

//     yield takeLatest[changeStartValue, AsyncAction()]
// }
