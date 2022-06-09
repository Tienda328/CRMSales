import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../components/SplashScreen';
import {AuthContext} from '../context/AuthContext';
import LOCALE_KEY, {
  getLocale,
  setLocale,
  clearLocale,
} from '../repositories/local/appLocale';
export let navigationRef = React.createRef();

class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLoggedIn = async () => {
      const accessToken = await getLocale(LOCALE_KEY.access_token);
      const isLoggedIn = accessToken !== null;
      this.refreshLocation(isLoggedIn);
      this.setState((state) => ({
        auth: {
          isLoggedIn: isLoggedIn,
          toggleLoggedIn: state.auth.toggleLoggedIn,
        },
      }));
    };
    this.state = {
      auth: {
        isLoggedIn: null,
        toggleLoggedIn: this.toggleLoggedIn,
      },
      openApp: false,
    };

    setTimeout(
      function () {
        this.setState({openApp: true});
      }.bind(this),
      2000,
    );
  }
  refreshLocation = (isLoggedIn) => {
    if (this._interval) {
      clearInterval(this._interval);
    }

    if (!isLoggedIn) {
      return;
    }
  };

  async componentDidMount() {
    const accessToken = await getLocale(LOCALE_KEY.access_token);
    const isLoggedIn = accessToken !== null;
    this.refreshLocation(isLoggedIn);
    this.setState((state) => ({
      auth: {
        isLoggedIn: isLoggedIn,
        toggleLoggedIn: state.auth.toggleLoggedIn,
      },
    }));
  }

  renderNavigator = () => {
    return this.state.auth.isLoggedIn !== true &&
    this.state.auth.isLoggedIn !== false ? (
    <></>
  ) : this.state.auth.isLoggedIn  ? (
      <StackNavigator />
    ) : (
      <AuthNavigator />
    );
  };

  //   renderLoading = () => {
  //   const {appState} = this.props;
  //   return <LoadingComponent modalVisible={appState.isLoading} />;
  // };

  render() {
    if (this.state.openApp !== true ) {
      return <SplashScreen />;
    }
    return (
      <AuthContext.Provider value={this.state.auth}>
      <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            {this.renderNavigator()}
              {/* {this.renderLoading()} */}
          </NavigationContainer>
  </AuthContext.Provider>
      
    );
  }
}

export default MainNavigator;
