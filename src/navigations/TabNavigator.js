import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ProFileScreen from '../screens/proFileScreen';
import MarketPlaceScreen from '../screens/marketPlaceScreen';
import ChatScreen from '../screens/chatScreen';

const styles = StyleSheet.create({
  tabbarItemCenter: {
    backgroundColor: '#FF8000',
    position: 'absolute',
    bottom: -12,
    padding: 7,
    marginBottom: 10,
    borderRadius: 37,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 3,
  },
});

export const routeName = {
  home: 'Home',
  profile: 'Profile',
  CopyrightManagement: 'CopyrightManagement',
  Customer: 'Customer',
  AddKey: 'AddKey',
};

const Tab = createBottomTabNavigator();
class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
    };
  }

  tabbarIcon = (route, focused, color, size) => {
    let iconName; if (route.name === 'Profile') {
      iconName = focused ? 'menu' : 'menu';
    } else if (route.name === 'MarketPlace') {
      iconName = focused ? 'shopping' : 'shopping';
    } else if (route.name === 'HomeCustomer') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'ChatScreen') {
      iconName = focused ? 'message' : 'message';
    } 
    else if (route.name === 'AddKey') {
      return (
        <View style={styles.tabbarItemCenter}>
          {focused ? <MaterialCommunityIcons name={'alarm-plus'} size={30} color={'#fff'} /> : <MaterialCommunityIcons name={'alarm-plus'} size={30} color={'#fff'} />}
        </View>
      );
    }
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  }

  tabBarLabel = (route, focused, color, size) => {
    let routeName;if (route.name === 'Profile') {
      color = focused ? '#F7941D' : '#A4A4A4'
      routeName = 'Menu';
    } else if (route.name === 'MarketPlace') {
      color = focused ? '#F7941D' : '#A4A4A4'
      routeName = 'MarketPlace';
    } else if (route.name === 'ChatScreen') {
      color = focused ? '#F7941D' : '#A4A4A4'
      routeName = 'Chat';
    }
    else if (route.name === 'HomeCustomer') {
      color = focused ? '#F7941D' : '#A4A4A4'
      routeName = 'Trang chủ';
    }
    return <Text style={{ color: color, fontSize:11, fontWeight:'400' }}>{routeName}</Text>
  }



  render() {
   
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return this.tabbarIcon(route, focused, color, size);
          },
          tabBarLabel: ({ focused, color, size }) => {
            return this.tabBarLabel(route, focused, color, size);
          },
          tabBarActiveTintColor: '#FF8000',
          tabBarInactiveTintColor: '#A4A4A4',
          headerShown: false,

        })}>
        <Tab.Screen name="HomeCustomer" component={HomeScreen} options={{
          tabBarVisible: false
        }} />
         <Tab.Screen name="MarketPlace" component={MarketPlaceScreen} options={{
          tabBarVisible: false
        }} />
          <Tab.Screen name="ChatScreen" component={ChatScreen} options={{
          tabBarVisible: false
        }} />
        <Tab.Screen name="Profile" component={ProFileScreen} />
      </Tab.Navigator>
    )

    
  }

}
export default TabNavigator;