import { put, call, takeLatest } from 'redux-saga/effects'
import { getCelebrities } from '../../api/services'

function* getCelebritiesSaga() {
    try {
        const { data: payload } = yield call(getCelebrities)
        yield put({ type: 'GET_CELEBRITIES_SUCCESS', payload })
    } catch (error) {
        yield put({ type: 'GET_CELEBRITIES_FAILED', payload: error })
    }
}

export default function* getCelebritiesWatcher() {
    yield takeLatest('GET_CELEBRITIES', getCelebritiesSaga)
}
