import { createStackNavigator, createAppContainer } from 'react-navigation'
import * as Constants from '../constants/constants'
import HomeScreen from '../screens/HomeScreen'
import FormScreen from '../screens/FormScreen'

const AppNavigator = createStackNavigator(
  {
    home: HomeScreen,
    notes: FormScreen,
  },
  {
    headerMode: 'screen',
    initialRouteName: Constants.HOME_SCREEN,
  }
)

export default createAppContainer(AppNavigator)
