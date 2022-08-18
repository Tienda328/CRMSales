import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, TextInput, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const imgNy1 = 'https://i.pinimg.com/736x/d5/8f/16/d58f1694d8892f6d45b581510101b468.jpg'
const imgNy2 = 'https://i.pinimg.com/474x/4a/56/d7/4a56d725ddf98860c064c67acbe8c9a8.jpg'
const imgNy3 = 'https://i.pinimg.com/564x/25/62/a9/2562a96b60dcf3a9a55127631783e7f4.jpg'
const imgNy = 'https://phunugioi.com/wp-content/uploads/2020/04/hot-girl-2k-nhay-mat.jpg'

const data1 = [
    {
        id: 1,
        image: 'https://i.pinimg.com/474x/39/5b/2b/395b2b0bcc3240394bbaaa5365a88306.jpg',
        name: 'Nguyễn Thị Mai',
        mess: 'em nhớ anh 🚀🚀🚀🚨',
        timeStart: 28
    },
    {
        id: 2,
        image: 'https://giasu.timviec365.com/asset/avatar/img-giasu/3ec597674d.jpg',
        name: 'Nguyễn Hương Trang',
        mess: 'tối nay anh ăn gì bữa tối của em 🚨 🚨  ⏰?',
        timeStart: 0
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/1a/15/50/1a15500c552d2743dea658969a77a441.jpg',
        name: 'Hoàng Thuý',
        mess: 'ny ơi 💵 💵 💵',
        timeStart: 48
    },
    {
        id: 4,
        image: 'https://vieclamthemonline.com/wp-content/uploads/2021/10/hinh-anh-co-gai-cute-1.jpg',
        name: 'Nguyễn Xuân Mai',
        mess: 'nhớ anh thì phải làm sao?',
        timeStart: 2
    }, {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zICkVB5UpcY1rtLNRIXUXSOpIhWVHuuwa4ZKh2WWEGmLkuylHLyQpnq743BDtSE5Hzo&usqp=CAU',
        name: 'Nguyễn Khách Linh',
        mess: '👍 👍 👍 👍 👍 👍 👍 👍 👍',
        timeStart: 7
    },
    {
        id: 6,
        image: 'https://hinhanhdephd.com/wp-content/uploads/2019/10/hinh-anh-hot-girl-nu-sinh-de-thuong-cute-2020-17.jpg',
        name: 'Trịnh Thị Hiền',
        mess: 'Nhớ em không?',
        timeStart: 0
    },
    {
        image: 'https://i.pinimg.com/564x/25/62/a9/2562a96b60dcf3a9a55127631783e7f4.jpg',
        mess: 'em chưa 18 đâu nha',
        name: 'Nguyễn Phương Linh',
        timeStart: 10
    },
    {
        id: 7,
        image: 'https://phunugioi.com/wp-content/uploads/2020/04/hot-girl-2k-nhay-mat.jpg',
        name: 'Nguyễn Phương',
        mess: 'hư nào 👍',
        timeStart: 0
    }

]
const ChatScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isFetching, setisFetching] = useState(false);
    const dispatch = useDispatch()
    const [search, setSearch] = useState();

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

    const renderItem2 = ({ item, index }) => (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('MessagesScreen', {item})}
        style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ alignItems: 'center', }}>
                <Image style={{ height: 50, width: 50, resizeMode: 'stretch', borderRadius: 25 }} source={{ uri: item.image }} />
                {item.timeStart === 0 ? <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 16, bottom: -1, right: 3, height: 16, borderRadius: 8, backgroundColor: 'white' }}>
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#01DF01' }} />
                </View> : null}
                <View style={{ position: 'absolute', bottom: -5, fontSize: 10, backgroundColor: '#E6E6E6', paddingHorizontal: 4, borderRadius: 10, }}>

                    {item.timeStart === 0? null : <Text style={{ fontSize: 9, color: '#01DF01' }}>{item?.timeStart} phút</Text>}
                </View>

            </View>
            <Text style={{ marginTop: 10, width: 40, fontSize: 12 }} numberOfLines={2} >{item.name}</Text>
        </TouchableOpacity>

    );

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 10, marginBottom: 10 }}
        onPress={()=>navigation.navigate('MessagesScreen', {item})}
        >
            <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                <Image style={{ height: 50, width: 50, resizeMode: 'stretch', borderRadius: 25 }} source={{ uri: item.image }} />
                {item.timeStart === 0? <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 16, bottom: -1, right: 3, height: 16, borderRadius: 8, backgroundColor: 'white' }}>
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#01DF01' }} />
                </View> : null}
                <View style={{ position: 'absolute', bottom: -5, fontSize: 10, backgroundColor: '#E6E6E6', paddingHorizontal: 4, borderRadius: 10, }}>
                    {item.timeStart === 0 ? null : <Text style={{ fontSize: 9, color: '#01DF01' }}>{item?.timeStart} phut</Text>}
                </View>
            </View>
            <View style={{ width: windowWidth / 1.4, justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }} numberOfLines={1}>{item?.name}</Text>
                <Text style={{ fontSize: 13, color: 'gray', }} numberOfLines={1}>{item?.mess} </Text>
            </View>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 15, marginLeft: 10 }} source={{ uri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/276296359_2801250510021779_7949528195487827599_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sE5lSjytpD0AX9DebrJ&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9Gs5WuZ7h52Etr9oCKv5KEY7p0DRLf9DU2PoWuVpv6Kw&oe=62AD900F' }} />
                <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: 'bold', flex: 1, paddingVertical: 10 }}>Đoạn chat</Text>
                <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#E6E6E6', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name={'camera'} size={18} color='#000' />
                </View>

            </View>
            <View style={{ backgroundColor: '#E6E6E6', marginHorizontal: 10, borderRadius: 20, flexDirection: 'row', paddingVertical: 5, justifyContent: 'center' }}>

                <MaterialCommunityIcons name={'magnify'} size={20} color='#000' style={{ marginHorizontal: 10 }} />
                <TextInput
                    style={{ flex: 1, marginRight: 15, fontSize: 13 }}
                    labelValue={search}
                    onChangeText={(search) => setSearch(search)}
                    placeholderText="search"
                    placeholder='Tìm kiếm'
                />
            </View>
            <FlatList
                ListHeaderComponent={
                    <FlatList

                        style={{ paddingHorizontal: 10, paddingVertical: 15 }}
                        ListHeaderComponent={
                            <TouchableOpacity style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ alignItems: 'center', height: 50, width: 50, backgroundColor: '#E6E6E6', borderRadius: 25, justifyContent: 'center' }}>
                                    <MaterialCommunityIcons name={'video-plus'} size={30} color='#000' style={{ marginHorizontal: 10 }} />
                                </View>
                                <Text style={{ marginTop: 10, width: 40, fontSize: 12 }} numberOfLines={2} >Tạo phòng họp mặt </Text>
                            </TouchableOpacity>
                        }
                        horizontal={true}
                        data={data1}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem2}
                        keyExtractor={(item, index) => index.toString()}
                    />

                }
                showsVerticalScrollIndicator={false}
                data={data1}
                onRefresh={() => onRefresh()}
                refreshing={isFetching}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default ChatScreen;