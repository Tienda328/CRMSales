import * as React from 'react';
import { Button, View, Text } from 'react-native';
import MainNavigator from './src/navigations/mainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/stores/index';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </View>
  );
}

export default App;
