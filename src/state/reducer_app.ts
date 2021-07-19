import { Alert } from 'react-native'
import { APP_INIT, SUBMIT_NOTES, TOGGLE_PENDING_SCREEN } from './action_types'

const INITIAL_STATE = {
  albums: [],
  pendingScreen: false,
  submitNotesResponse: {},
  fetchError: false,
}

const errorAlert = () => {
  Alert.alert(
    'Error fetching data',
    '',
    [
      {
        text: 'OK',
        onPress: () => {},
        style: 'cancel',
      },
    ],
    { cancelable: false }
  )
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case APP_INIT.SUCCESS:
      return {
        ...state,
        albums: action.payload,
      }
    case APP_INIT.ERROR:
      errorAlert()
      return { ...state, fetchError: true }
    case SUBMIT_NOTES.SUCCESS:
      return { ...state, submitNotesResponse: action.payload }
    case TOGGLE_PENDING_SCREEN:
      return { ...state, pendingScreen: action.payload }
    default:
      return state
  }
}
