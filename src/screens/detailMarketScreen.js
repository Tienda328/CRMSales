import React, { useContext, useState } from 'react'
import { View, Image, SafeAreaView, Dimensions, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const dddimg = 'https://phunugioi.com/wp-content/uploads/2021/11/anh-xe-do.jpg'
const DetailMarketScreen = ({ navigation }) => {
    const [send, setSend] = useState('Mặt hàng này còn không?');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ width: '100%' }}>
                   <TouchableOpacity>
                   <Image style={{ height: windowHeight / 3, width: '100%', resizeMode: 'stretch' }} source={{ uri: dddimg }} />
                   </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ width: 30, height: 30, left: 10, top: 10, borderRadius: 15, position: 'absolute', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={'close'} size={26} color='#000' />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>Xe may</Text>
                <Text style={{ fontSize: 16, marginLeft: 10, marginBottom: 10 }}>2.000 đ</Text>
                <View style={{ backgroundColor: 'white', marginHorizontal: 10, paddingVertical: 12, paddingHorizontal: 10, borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/03/18/35/messenger-1495274_1280.png' }} />
                        <Text style={{ fontSize: 11, marginLeft: 10 }} >Gửi tin nhắn cho người bán</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <TextInput
                            multiline
                            style={{ backgroundColor: '#D8D8D8', fontSize: 12, flex: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, marginRight: 10 }}
                            value={send}

                            onChangeText={(send) => setSend(send)}
                            placeholder='ab'
                        />
                        <TouchableOpacity style={{ backgroundColor: '#0080FF', borderRadius: 5, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 11, color: 'white', fontWeight: 'bold' }} >Gửi</Text>
                        </TouchableOpacity>
                    </View>
                 
                </View>
                <View style={{flexDirection:'row', marginHorizontal:10, marginTop:10}}>
                    <TouchableOpacity
                        style={{  justifyContent: 'center', alignItems: 'center', flex:1 }}>
                       <View style={{backgroundColor:'#D8D8D8',width:30,height:30, borderRadius:15,justifyContent: 'center', alignItems: 'center',}}>
                       <MaterialCommunityIcons name={'bell'} size={20} color='#000' />
                       </View>
                        <Text style={{fontSize:11, fontWeight:'600'}}>Thông báo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{  justifyContent: 'center', alignItems: 'center', flex:1 }}>
                       <View style={{backgroundColor:'#D8D8D8',width:30,height:30, borderRadius:15,justifyContent: 'center', alignItems: 'center',}}>
                       <MaterialCommunityIcons name={'bookmark'} size={20} color='#000' />
                       </View>
                        <Text style={{fontSize:11, fontWeight:'600'}}>Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{  justifyContent: 'center', alignItems: 'center', flex:1 }}>
                       <View style={{backgroundColor:'#D8D8D8',width:30,height:30, borderRadius:15,justifyContent: 'center', alignItems: 'center',}}>
                       <MaterialCommunityIcons name={'share'} size={20} color='#000' />
                       </View>
                        <Text style={{fontSize:11, fontWeight:'600'}}>Chia sẻ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{  justifyContent: 'center', alignItems: 'center', flex:1 }}>
                       <View style={{backgroundColor:'#D8D8D8',width:30,height:30, borderRadius:15,justifyContent: 'center', alignItems: 'center',}}>
                       <MaterialCommunityIcons name={'offer'} size={20} color='#000' />
                       </View>
                        <Text style={{fontSize:11, fontWeight:'600'}}>Trả giá</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:14, fontWeight:'bold', padding:10}}>Thông tin về người bán</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:10, }}>
                 <TouchableOpacity style={{flexDirection:'row', alignItems:'center',flex:1}}>
                 <Image style={{ width: 40, height: 40,borderRadius:20, resizeMode: 'stretch' }} source={{ uri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/276296359_2801250510021779_7949528195487827599_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sE5lSjytpD0AX9DebrJ&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9Gs5WuZ7h52Etr9oCKv5KEY7p0DRLf9DU2PoWuVpv6Kw&oe=62AD900F' }} />
                    <Text style={{ marginLeft:10, fontSize:14, fontWeight:'500'}}>Trần Xuân Tới</Text>
                 </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor:'#D8D8D8', alignItems:'center', justifyContent:'center', borderRadius:5,padding:5}}>
                        <Text>Theo doi</Text>
                    </TouchableOpacity> 
                    </View>
                    <View style={{borderBottomWidth:0.5, borderBottomColor:'gray', marginHorizontal:10}}>
                    <Text style={{fontSize:14,marginTop:10 }}>Dia Chi</Text>
                    <Text style={{paddingVertical:10}}>Dang o ha noi</Text>
                    </View>
                    <View style={{borderBottomWidth:0.5, borderBottomColor:'gray', marginHorizontal:10}}>
                    <Text style={{fontSize:14, fontWeight:'bold',marginTop:10}}>Chi tiet</Text>
                    <View style={{flexDirection:'row' , paddingVertical:10}}>
                        <Text style={{flex:1}}>TInh trang</Text>
                        <Text>moi</Text>
                    </View>
                    </View>
                    <View style={{ marginHorizontal:10}}>
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:10}}>Mo ta</Text>
                    <Text style={{paddingVertical:10}}>xe may dinh cap thoi thuong hon da moi nhon dua dia hinh dang cap the </Text>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailMarketScreen;