import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./routes/AppNavigator";
import configureStore from "./state/create_store";
import Styles from "./styles/Styles";

const store = configureStore();

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView style={Styles.app}>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
);

export default App;
