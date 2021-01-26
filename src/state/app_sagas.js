import { call, put, takeLatest } from 'redux-saga/effects'
import {
  appInitSuccess,
  appInitError,
  submitNotesSuccess,
  togglePendingScreen,
} from './actions'
import { APP_INIT, SUBMIT_NOTES } from './action_types'
import API from './api'

export const appInit = function*() {
  yield put(togglePendingScreen(true))
  try {
    const result = yield call(API.init)
    yield put(appInitSuccess(result))
  } catch (error) {
    yield put(appInitError(error))
  }
  yield put(togglePendingScreen(false))
}

export const submitNotes = function*(action) {
  yield put(togglePendingScreen(true))
  try {
    const result = yield call(API.submitNotes, action.params)
    yield put(submitNotesSuccess(result))
  } catch (error) {
    yield put(appInitError(error))
  }
  yield put(togglePendingScreen(false))
}

export const watchAppInit = function*() {
  yield takeLatest(APP_INIT.REQUESTED, appInit)
}

export const watchSubmitNotes = function*() {
  yield takeLatest(SUBMIT_NOTES.REQUESTED, submitNotes)
}
