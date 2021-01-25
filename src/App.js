import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import AppNavigator from './routes/AppNavigator'
import configureStore from './state/create_store'
import { Colors } from './constants/colors'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.charcoalGrey }}>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
)

export default App
