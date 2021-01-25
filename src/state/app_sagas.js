import { call, put, takeLatest } from 'redux-saga/effects'
import {
  appInitSuccess,
  appInitError,
  submitAnswerSuccess,
  togglePendingScreen,
} from './actions'
import { APP_INIT, SUBMIT_ANSWER } from './action_types'
import API from './api'

export const appInit = function*(action) {
  yield put(togglePendingScreen(true))
  try {
    const result = yield call(API.init)
    yield put(appInitSuccess(result))
  } catch (error) {
    yield put(appInitError(error))
  }
  yield put(togglePendingScreen(false))
}

export const submitAnswer = function*(action) {
  yield put(submitAnswerSuccess(action.payload))
}

export const watchAppInit = function*() {
  yield takeLatest(APP_INIT.REQUESTED, appInit)
}

export const watchSubmitAnswer = function*() {
  yield takeLatest(SUBMIT_ANSWER.REQUESTED, submitAnswer)
}
