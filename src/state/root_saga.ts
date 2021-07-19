import { spawn, all } from 'redux-saga/effects'
import { watchAppInit, watchSubmitNotes } from './app_sagas'

const rootSaga = function*() {
  yield all([spawn(watchAppInit), spawn(watchSubmitNotes)])
}

export default rootSaga
