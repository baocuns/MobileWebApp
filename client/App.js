import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { enableLatestRenderer } from 'react-native-maps';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./src/redux/store";
import RootNav from './src/screens/RootNav';
import i18n from './src/i18n';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

enableLatestRenderer();

const App = () => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language')
      if (value !== null) {
        i18n.changeLanguage(value)
      }
      console.log("get store: ", value);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  useEffect(() => {
    SplashScreen.hide();
    // getData();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNav />
      </PersistGate>
    </Provider>
  );
}
export default App;

