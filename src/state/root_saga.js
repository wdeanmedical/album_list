import { spawn, all } from 'redux-saga/effects'
import { watchAppInit, watchSendOrder, watchSubmitAnswer } from './app_sagas'

const rootSaga = function*() {
  yield all([spawn(watchAppInit), spawn(watchSubmitAnswer)])
}

export default rootSaga
