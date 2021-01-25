const createAsyncActionType = action => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
})

export const APP_INIT = createAsyncActionType('init')
export const ORDER = createAsyncActionType('order')
export const SUBMIT_ANSWER = createAsyncActionType('answer')
export const TOGGLE_PENDING_SCREEN = 'TOGGLE_PENDING_SCREEN'
