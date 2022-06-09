import * as React from 'react';
import { Button, View, Text } from 'react-native';
import MainNavigator from './src/navigations/mainNavigator';

function App() {
  return (
    <View style={{flex:1}}>
       <MainNavigator />
    </View>
  );
}

export default App;
