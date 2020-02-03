import { all, fork } from 'redux-saga/effects';
import getCelebritiesWatcher from './getCelebritiesSaga';

export default function* rootSaga() {
    yield all([
        fork(getCelebritiesWatcher),
    ]);
};
