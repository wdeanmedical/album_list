const createAsyncActionType = (action) => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
});

export const APP_INIT = createAsyncActionType("init");
export const SUBMIT_NOTES = createAsyncActionType("submitNotes");
export const TOGGLE_PENDING_SCREEN = "TOGGLE_PENDING_SCREEN";
