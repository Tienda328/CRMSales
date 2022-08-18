import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    height: '100%',
    opacity: 0.45,
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
});

export default class LoadingComponent extends Component {
  render() {
    const {modalVisible} = this.props;
    if (!modalVisible) {
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
}

LoadingComponent.propTypes = {
  modalVisible: PropTypes.bool,
};

LoadingComponent.defaultProps = {
  modalVisible: false,
};


// import React, {Component} from 'react';
// import {View, ActivityIndicator, StyleSheet,  Animated,
//   Image,
//   Easing} from 'react-native';
// import PropTypes from 'prop-types';
// import colors from '../constants/colors';

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: colors.black,
//     height: '100%',
//     opacity: 0.45,
//     position: 'absolute',
//     width: '100%',
//   },
//   container: {
//     alignItems: 'center',
//     height: '100%',
//     justifyContent: 'center',
//     position: 'absolute',
//     width: '100%',
//   },
// });

// export default class LoadingComponent extends Component {
//   constructor () {
//     super()
//     this.spinValue = new Animated.Value(0)
//   }

//   componentDidMount () {
//     this.spin()
//   }

//   spin () {
//     this.spinValue.setValue(0)
//     Animated.timing(
//       this.spinValue,
//       {
//         toValue: 1,
//         duration: 4000,
//         useNativeDriver: true,
//         easing: Easing.linear
//       }
//     ).start(() => this.spin())
//   }

//   render() {
//     const {modalVisible} = this.props;
//     const spin = this.spinValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '360deg']
//     })
//     if (!modalVisible) {
//       return null;
//     }

//     return (
//       <View style={styles.container}>
//         <View style={styles.background} />
//         <View style={styles.container}>
//       <Animated.Image
//       useNativeDriver={true}
//         style={{
//           width: 227,
//           height: 200,
//           transform: [{rotate: spin}] }}
//           source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
//       />
//     </View>

//         {/* <ActivityIndicator size="large" color="black" /> */}
//       </View>
//     );
//   }
// }

// LoadingComponent.propTypes = {
//   modalVisible: PropTypes.bool,
// };

// LoadingComponent.defaultProps = {
//   modalVisible: false,
// };
