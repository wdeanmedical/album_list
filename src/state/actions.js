import { APP_INIT, SUBMIT_ANSWER, TOGGLE_PENDING_SCREEN } from './action_types'

export const appInit = () => {
  return {
    type: APP_INIT.REQUESTED,
    payload: {},
  }
}

export const appInitSuccess = payload => ({
  type: APP_INIT.SUCCESS,
  payload,
})

export const appInitError = error => ({
  type: APP_INIT.ERROR,
  error,
})

export const togglePendingScreen = payload => ({
  type: TOGGLE_PENDING_SCREEN,
  payload,
})

export const submitAnswer = answer => {
  return {
    type: SUBMIT_ANSWER.REQUESTED,
    payload: answer,
  }
}

export const submitAnswerSuccess = payload => ({
  type: SUBMIT_ANSWER.SUCCESS,
  payload,
})
