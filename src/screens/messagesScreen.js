import React, { useEffect, useRef, useState } from 'react'
import { View, Image, SafeAreaView, FlatList, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const MessagesScreen = ({ navigation }) => {
    const [search, setSearch] = useState();
    const [data, setData] = useState([]);
    const route = useRoute();
    const getItem = route.params.item;
    const flatList = useRef(null);


    const renderItem = ({ item, index }) => 
        <TouchableOpacity 
        >
          <View style={{ flexDirection: 'row', marginTop: 5,}}>
          <Text style={{ flex: 1 }} />
            <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20,marginLeft:40 , marginRight:10}}>
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '600'}}>{item.message}</Text>
            </View>
          </View>
        </TouchableOpacity>
    ;
    const onSend = async () => {
        if (search === undefined || search === '') {
            setSearch()
        } else {
            data.push({ message: search })
            setData(data)
            setSearch()
        }
    }

    const onChangeTextSearch = (search) => {
        setSearch(search)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name={'less-than'} size={20} style={{ marginHorizontal: 10, color: '#F7941D', fontWeight: 'bold' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 15 }} source={{ uri: getItem?.image ? getItem?.image : '' }} />
                        {getItem?.timeStart === 0 ? <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 12, bottom: -1, right: 3, height: 12, borderRadius: 6, backgroundColor: 'white' }}>
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#01DF01' }} />
                        </View> : null}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: 'bold' }}>{getItem?.name}</Text>
                        {getItem?.timeStart !== 0 ? <Text style={{ marginLeft: 10, fontSize: 10, }}>Hoạt động {getItem?.timeStart} phút trước</Text> : null}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <View>
                                <Image style={{ height: 80, width: 80, resizeMode: 'stretch', borderRadius: 40 }} source={{ uri: getItem?.image ? getItem?.image : '' }} />
                                {getItem?.timeStart === 0 ? <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 20, bottom: -1, right: 3, height: 20, borderRadius: 10, backgroundColor: 'white' }}>
                                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#01DF01' }} />
                                </View> : null}
                            </View>

                            <Text style={{ marginTop: 10, fontSize: 22, fontWeight: 'bold' }}>{getItem?.name}</Text>
                            <Text style={{ fontSize: 13, fontWeight: '600', marginTop: 5 }}>Facebook</Text>
                            <Text style={{ fontSize: 13, color: '#585858', marginTop: 5 }}>Các bạn là bạn bè trên Facebook</Text>
                            <Text style={{ fontSize: 13, color: '#585858', marginTop: 5, marginBottom: 10 }}>Sống tại Hà Nội</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <View style={{ paddingBottom: 20 }} />
                    }
                    ref={flatList}
                    onContentSizeChange={() => flatList.current.scrollToEnd()}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}

                />

            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: "center", }}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={'image'} size={25} color='#0080FF' style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <TextInput
                        multiline
                        style={{ backgroundColor: '#D8D8D8', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, marginHorizontal: 10 }}
                        value={search}
                        onChangeText={onChangeTextSearch}
                        placeholderText="search"
                        placeholder='Ab'
                    />
                </View>
                <TouchableOpacity
                    onPress={onSend}
                >
                    <MaterialCommunityIcons name={'send'} size={25} color='#0080FF' style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MessagesScreen;