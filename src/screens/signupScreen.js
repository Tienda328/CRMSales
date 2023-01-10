import React, { useEffect, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import LOCALE_KEY, {
    getLocale,
    setLocale,
    clearLocale,
} from '../repositories/local/appLocale';
import { AuthContext } from '../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import colors  from '../constants/colors';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassWord, setRePassWord] = useState();
    const dispatch = useDispatch()
    // useEffect(() => {
    //     getAptTest();
    //   }, []);

    // const  getAptTest=()=>{
    //     api.getTest( dispatch,(data) => {
    //         console.log('sssw',data)
    //       });
    //   }


    const onLogin = () => {
        console.log('ssss')
        // navigation.navigate('LoginScreen')
    }
    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, toggleLoggedIn }) => (
                <View style={{ flex: 1, backgroundColor: colors.colorBackgroudNen }}>
                    {/* <Image style={{ position: 'absolute', height: '100%', width: '100%' }} source={{ uri: 'https://designimages.appypie.com/appbackground/appbackground-19-nature-outdoors.jpg' }} /> */}
                    <View style={{ marginLeft: 16, flex: 1, marginTop: 50 }} >
                        <Image style={{ width: 100, height: 100,borderRadius:10, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-0L7CJ1biaLHo2SL-71j6H5I-QPAHqBn7WW9eokSe6ber51W9niawJ77L9zw87O3-mw&usqp=CAU' }} />
                        <Text style={styles.txtWelcome}>SingUp</Text>
                        <Text style={styles.txtToContinue}>Register a new account</Text>
                    </View>
                    <View style={{ flex: 2, marginTop: 30, justifyContent: 'center' }}>

                        <View style={styles.ViewTexInput}>
                            <MaterialCommunityIcons name={'account'} size={25} style={styles.imgIcon} />
                            <TextInput
                                style={styles.txtTextInput}
                                labelValue={email}
                                onChangeText={(userEmail) => setEmail(userEmail)}
                                placeholderText="Email"
                                placeholder='Nhập tài khoản'
                            />
                        </View>
                        <View style={styles.ViewTexInput}>
                            <MaterialCommunityIcons name={'lock'} size={25} style={styles.imgIcon} />
                            <TextInput
                                style={styles.txtTextInput}
                                labelValue={password}
                                onChangeText={(userPassword) => setPassword(userPassword)}
                                iconType="lock"
                                placeholder='Nhập mật khẩu'
                            />
                        </View>
                        <View style={styles.ViewTexInput}>
                            <MaterialCommunityIcons name={'lock-check'} size={25} style={styles.imgIcon} />
                            <TextInput
                                style={styles.txtTextInput}
                                labelValue={rePassWord}
                                onChangeText={(rePassWord) => setRePassWord(rePassWord)}
                                placeholder='Nhập lại mật khẩu'
                                iconType="lock"
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => onLogin()}
                        >
                            <LinearGradient
                                colors={['#100F0F', '#100F0F', '#100F0F']}
                                style={styles.signIn}>
                                <Text style={styles.txtLogin} >SignUp</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50, }}>
                            <Text style={{ fontSize: 12 }} >Log in to your account here.</Text>
                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.goBack()} >
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#2666CF', }} >Singin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </AuthContext.Consumer>
    )
}


const styles = StyleSheet.create({
    txtWelcome: {
        fontWeight: 'bold',
        // fontFamily:'',
        marginTop: 20,
        color: colors.colorAll,
        fontSize: 30
    },
    txtToContinue: {
        fontSize: 16,
        marginTop: 10,
        color: colors.colorAll
    },
    signIn: {
        marginTop: 30,
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtLogin: {
        fontWeight: '600',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    txtTextInput: {
        flex: 1,
        paddingVertical: 18,
        borderRadius: 6,
        paddingRight: 10,
        fontSize: 13,
        // color: '#333',
    },
    imgIcon: {
        color: colors.colorAll,
        marginHorizontal: 10
    },
    imgIconEye: {

    },
    ViewTexInput: {
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 40,
        backgroundColor: 'white',
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bntEye: {
        marginRight: 14
    }

});
function mapStateToProps(state) {
    return {
        appState: state.appState,
    };
};
function mapDispatchToProps(dispatch) {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);