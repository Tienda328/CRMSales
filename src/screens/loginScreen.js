import React, { useEffect, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import LOCALE_KEY, {
    getLocale,
    setLocale,
    clearLocale,
} from '../repositories/local/appLocale';
import { AuthContext } from '../context/AuthContext';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = '';
    const dispatch = useDispatch()
    useEffect(() => {
        getAptTest();
      }, []);

    const  getAptTest=()=>{
        api.getTest( dispatch,(data) => {
            console.log('sssw',data)
          });
      }


    onLoginClick = async (toggleLoggedIn) =>{
        await setLocale(LOCALE_KEY.access_token, 'asdfasdfsadfasd23');
        await toggleLoggedIn();
    }
    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, toggleLoggedIn }) => (
                <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }} >
                    <View style={{ alignItems: 'center' }} >
                        <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsX9T0dQcbVzbu8ssxwM0INCkJNXHXe8-GgQ&usqp=CAU' }} />
                    </View>
                    <Text style={{ marginLeft: 16, fontSize: 25, fontWeight: '600', marginVertical: 10 }} >Email: </Text>
                    <TextInput style={{
                        padding: 10,
                        borderWidth: 1,
                        marginHorizontal: 16,
                        borderRadius: 6,
                        fontSize: 16,
                        color: '#333',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        numberOfLines={1}
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Text style={{ marginLeft: 16, fontSize: 25, fontWeight: '600', marginVertical: 10 }} >PassWord: </Text>
                    <TextInput style={{
                        padding: 10,
                        borderWidth: 1,
                        marginHorizontal: 16,
                        borderRadius: 6,
                        fontSize: 16,
                        color: '#333',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={{
                            backgroundColor: 'blue', height: 48, marginHorizontal: 16, justifyContent: 'center', alignItems: 'center', marginVertical: 16,
                            borderRadius: 6
                        }}
                        onPress={() => this.onLoginClick(toggleLoggedIn)}
                    >
                        <Text style={{ fontWeight: '600', fontSize: 25, color: '#fff' }} >Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('SignupScreen')} >
                        <Text style={{ fontSize: 25, color: '#04B404' }} >Đăng Ký</Text>
                    </TouchableOpacity>

                </View>
            )}
        </AuthContext.Consumer>
    )
}

  function mapStateToProps  (state)   {
    return {
        appState: state.appState,
    };
  };
  function mapDispatchToProps (dispatch)   {
    return {
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);