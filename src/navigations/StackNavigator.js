import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator,  CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import screenName from '../constants/screenName';
import HomeScreen from '../screens/homeScreen';
import MessagesScreen from '../screens/messagesScreen';
import DetailMarketScreen from '../screens/detailMarketScreen';

const Stack = createStackNavigator();
class StackNavigator extends React.Component {

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled:true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name={screenName.TabNavigator} component={TabNavigator} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'MessagesScreen'} component={MessagesScreen} />
        <Stack.Screen name={'DetailMarketScreen'} component={DetailMarketScreen} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
