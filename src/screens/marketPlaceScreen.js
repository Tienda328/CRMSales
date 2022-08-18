import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const dddimg = 'https://phunugioi.com/wp-content/uploads/2021/11/anh-xe-do.jpg'
const dddimg1 = 'https://bestcargo.vn/wp-content/uploads/2018/06/van-chuyen-quan-ao.jpeg'
const dddimg2 = 'https://giamgiaxl.com/wp-content/uploads/2018/11/Bep-tu-doi.jpg'
const dddimg3 = 'https://bizweb.dktcdn.net/100/410/485/products/noi-nhom-chong-dinh-kangaroo-kg993mx-bo-3-cai-1-org.jpg?v=1614563529177'
const MarletPlaceScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isFetching, setisFetching] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        getAptTest1();
    }, []);

    const onRefresh = () => {
        getAptTest1();
    }

    const getAptTest1 = () => {
        api.getTypicode(dispatch, (data) => {
            setData(data)
        });
    }

    const renderItem = ({ item, index }) => (
        // let sdd='sadfasfasf'
        <TouchableOpacity style={{ width: windowWidth / 2, marginRight: 5, }}
        onPress={() => navigation.navigate('DetailMarketScreen')}
        >
            <Image style={{ height:150, width: '100%', resizeMode: 'stretch', }} source={{ uri: index % 2 ?index % 3?dddimg3: dddimg :index % 5?dddimg1: dddimg2 }} />
            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                <Text style={{ marginHorizontal: 10, fontSize: 13 }}>{item?.title.length}.000 đ  -  </Text>
                <Text style={{ width: windowWidth / 5, fontSize: 13, fontWeight: '400' }} numberOfLines={1}>{item?.title}</Text>
            </View>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', flex: 1 }}>MarketPlace</Text>
                <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D8D8D8' }} >
                    <MaterialCommunityIcons name={'magnify'} size={18} color='#000' />
                </TouchableOpacity>
            </View>
            <FlatList
                numColumns={2}
                ListHeaderComponent={
                    <View>
                        <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:10,}}>
                            <TouchableOpacity style={{flexDirection:'row', marginRight:5, flex:1, backgroundColor:"#D8D8D8", justifyContent:'center', alignItems:'center',paddingVertical:5, borderRadius:10}}>
                            <MaterialCommunityIcons name={'image-edit'} size={18} color='#6E6E6E' />
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Bán</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',marginLeft:5, flex:1, backgroundColor:"#D8D8D8", justifyContent:'center', alignItems:'center',paddingVertical:5, borderRadius:10}}>
                            <MaterialCommunityIcons name={'menu'} size={18} color='#6E6E6E' />
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Hạng mục</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', flex: 1, paddingVertical: 5 }}>Lựa chọn hôm nay</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <MaterialCommunityIcons name={'map-marker'} size={18} color='#0040FF' />
                                <Text style={{ fontSize: 14, color: '#0040FF', }}>Hanoi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                }
                showsVerticalScrollIndicator={false}
                data={data}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default MarletPlaceScreen;