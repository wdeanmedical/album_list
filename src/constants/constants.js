import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window').height
export const SCREEN_HEIGHT = height

const { width } = Dimensions.get('window').width
export const SCREEN_WIDTH = width

export const BROWSER = 'browser'
export const MOBILE = 'mobile'
export const ENABLED = 'enabled'
export const DISABLED = 'disabled'

// Platform Types
export const IOS = 'ios'
export const ANDROID = 'android'

export const HOME_SCREEN = 'home'
export const NOTES_SCREEN = 'notes'

export const ANSWER_TRUE = 'True'
export const ANSWER_FALSE = 'False'
