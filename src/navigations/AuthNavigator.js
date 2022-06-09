import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator,CardStyleInterpolators  } from '@react-navigation/stack';
import screenName from '../constants/screenName';
import LoginScreen  from '../screens/loginScreen';
import SignupScreen  from '../screens/signupScreen';
const Stack = createStackNavigator();


class AuthNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled:true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={screenName.SignupScreen} component={SignupScreen} />

      </Stack.Navigator>
    );
  }
}

export default AuthNavigator;
