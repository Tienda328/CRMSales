import React, { useContext, useState } from 'react'
import { View, Image, SafeAreaView,Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import LOCALE_KEY, {
    getLocale,
    setLocale,
    clearLocale,
} from '../repositories/local/appLocale';
import { AuthContext } from '../context/AuthContext';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const ProFileScreen = ({ navigation }) => {

    const logoutPress = async (toggleLoggedIn) => {
        await clearLocale(LOCALE_KEY.access_token);
        toggleLoggedIn();
    };
    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, toggleLoggedIn }) => (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                    <ScrollView style={{ flex: 1, }} >
                        <Text style={{ marginTop: 10, fontSize: 24, fontWeight: "bold", marginLeft: 10 }}>Menu</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 15 }} >
                            <Image style={{ width: 30, height: 30, borderRadius: 15, resizeMode: 'stretch' }} source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png' }} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Urumaki Naruto</Text>
                                <Text style={{ fontSize: 13 }}>Xem trang cá nhân của bạn</Text>
                            </View>
                        </TouchableOpacity >

                   <View style={{height:windowHeight/1.5, flex:1}}>
                   <View style={{ flexDirection: 'row', marginHorizontal:10 , marginTop:10}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('HomeCustomer')}
                            style={{ flex: 1,marginRight:5,borderRadius:10, height: 70, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={{ uri: 'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png' }} />
                                <Text>Trang chu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('MarketPlace')}
                            style={{ flex: 1,marginLeft:5,borderRadius:10, height: 70, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPlks0YIG19-z9vn03LFwAV7fHrrR6p7mXg&usqp=CAU' }} />
                                <Text>MarketPlace</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal:10 , marginTop:10}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('ChatScreen')} 
                            style={{ flex: 1,marginRight:5,borderRadius:10, height: 70, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/03/18/35/messenger-1495274_1280.png' }} />
                                <Text>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('HomeCustomer')}
                            style={{ flex: 1,marginLeft:5,borderRadius:10, height: 70, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={{ uri: 'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png' }} />
                                <Text>Trang chu</Text>
                            </TouchableOpacity>
                        </View>
                   </View>


                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, marginBottom: 10, marginHorizontal: 10, borderRadius: 4, justifyContent: 'center', backgroundColor: '#D8D8D8' }} onPress={() => logoutPress(toggleLoggedIn)} >
                            <Text style={{ fontSize: 13, fontWeight: '600', paddingVertical: 5 }} >Đăng xuất</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </SafeAreaView>
            )}
        </AuthContext.Consumer>
    )
}

export default ProFileScreen;