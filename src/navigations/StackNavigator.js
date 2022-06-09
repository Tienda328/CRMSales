import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator,  CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import screenName from '../constants/screenName';
import HomeScreen from '../screens/homeScreen';

const Stack = createStackNavigator();

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('HomeScreen')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
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
        <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
