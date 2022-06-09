import React, { useContext, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import LOCALE_KEY, {
    getLocale,
    setLocale,
    clearLocale,
} from '../repositories/local/appLocale';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = '';

    onLoginClick = async (toggleLoggedIn) =>{
        await setLocale(LOCALE_KEY.access_token, 'asdfasdfsadfasd23');
        await toggleLoggedIn();
    }
    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, toggleLoggedIn }) => (
                <View style={{ flex: 1, backgroundColor: '#fff',}} >
                    <View style={{ alignItems: 'center' }} >
                        <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsX9T0dQcbVzbu8ssxwM0INCkJNXHXe8-GgQ&usqp=CAU' }} />
                    </View>
                  

                </View>
            )}
        </AuthContext.Consumer>
    )
}

export default LoginScreen;