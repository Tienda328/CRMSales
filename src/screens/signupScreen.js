import React, { useContext, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { navigationRef } from '../navigations/mainNavigator';
// import { AuthContext } from '../navigators/AuthProvider'
import LOCALE_KEY, {
    getLocale,
    setLocale,
    clearLocale,
  } from '../repositories/local/appLocale';

const Signup = ({ navigation }) => {
    console.log('sss',getLocale(LOCALE_KEY.email))
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // const { register } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={{ alignItems: 'center', paddingTop: 16 }} >
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
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                iconType="user"
                placeholderText="Email"
                keyboardType="email-address"
                numberOfLines={1}
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
                numberOfLines={1}
                secureTextEntry={true}
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
            />
            <Text style={{ marginLeft: 16, fontSize: 25, fontWeight: '600', marginVertical: 10 }} >Confirm Password: </Text>
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
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <TouchableOpacity style={{ backgroundColor: 'blue', height: 48, marginHorizontal: 16, justifyContent: 'center', alignItems: 'center', marginVertical: 16, borderRadius: 6 }} 
            onPress={() => navigation.goBack()}
            >
                <Text style={{ fontWeight: '600', fontSize: 25, color: '#fff' }} >Sign-Up</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Signup;