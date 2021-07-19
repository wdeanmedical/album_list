import { APP_INIT, SUBMIT_NOTES, TOGGLE_PENDING_SCREEN } from './action_types'

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

export const submitNotes = params => {
  console.log('IN submitNotes() Action', params)
  return {
    type: SUBMIT_NOTES.REQUESTED,
    params,
  }
}

export const submitNotesSuccess = payload => ({
  type: SUBMIT_NOTES.SUCCESS,
  payload,
})
