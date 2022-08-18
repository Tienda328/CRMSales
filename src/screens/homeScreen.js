import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const dddimg = 'https://hieumobile.com/wp-content/uploads/2018/06/ezgif-1-052a62e856.gif'
const dddimg1 = 'https://blogphotoshop.com/wp-content/uploads/2019/03/hinh-anh-dong-powerpoint.gif'
const dddimg2 = 'https://img.thuthuatphanmem.vn/uploads/2018/10/26/anh-dong-noel-dep_054957375.gif'
const tin = 'https://st.quantrimang.com/photos/image/2018/03/19/anh-dong-hai-huoc-3.gif'
const tin1 = 'https://farm1.staticflickr.com/852/29885853258_8c56c08052_o.gif'
const tin2 = 'https://genk.mediacdn.vn/2017/2-1501485409641.gif'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [data, setData] = useState([]);
  const [isFetching, setisFetching] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    getAptTest1();
  }, []);

  const getAptTest1 = () => {
    api.getTypicode(dispatch, (data) => {
      setData(data)
    });
  }

  const onRefresh = () => {
    getAptTest1();
  }

  const renderItem = ({ item, index }) => (
    <View>
      <View style={{ height: 5, backgroundColor: '#E6E6E6' }} />
      <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: '#D8D8D8', borderBottomWidth: 0.5 }}>
        <Text style={{ flex: 1, marginLeft: 10, fontSize: 12, }}>Gợi ý cho bạn</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name={'dots-horizontal'} size={18} style={styles.imgIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name={'close'} size={18} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <TouchableOpacity>
         <Image style={{ height: 30, width: 30, borderRadius: 15, marginHorizontal: 10 }} source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png' }} />
         </TouchableOpacity>
          <View>
          <TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Urumaki Naruto</Text>
          </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: '#6E6E6E' }}>1 ngày </Text>
              <MaterialCommunityIcons name={'circle-small'} size={15} color='#A4A4A4' />
              <TouchableOpacity>
                <MaterialCommunityIcons name={'earth'} size={15} color='#A4A4A4' />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 13 }}>{item.title} !</Text>
          <Image style={{ height: 250, width: '100%', marginTop: 10 }} source={{ uri: index % 2 ? index % 3 ? tin2 : dddimg : index % 5 ? dddimg2 : dddimg1 }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 10, paddingLeft: 10 }}>
          <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: '#0040FF', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name={'thumb-up'} size={9} color='#fff' />
          </View>
          <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.title.length*10}k</Text>
          <Text style={{ flex: 1, fontSize: 13, textAlign: 'right' }}>{item.title.length*2}k bình luận</Text>
          <Text style={{ marginHorizontal: 10, fontSize: 13 }}>{item.title.length*5}k chia sẻ </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, paddingVertical: 10, marginHorizontal: 10, borderTopWidth: 0.5, borderTopColor: '#A4A4A4' }}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <MaterialCommunityIcons name={'thumb-up'} size={15} color='#0040FF' />
            <Text style={{ marginLeft: 10, fontSize: 13 }}>Thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <MaterialCommunityIcons name={'comment'} size={15} color='#A4A4A4' />
            <Text style={{ marginLeft: 10, fontSize: 13 }}>Bình luận</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <MaterialCommunityIcons name={'share'} size={18} color='#A4A4A4' />
            <Text style={{ marginLeft: 10, fontSize: 13 }}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );

  const renderItem2 = ({ item, index }) => (

    <TouchableOpacity style={{ width: 100, marginRight: 10, height: 140, }}>

      {index % 2 ? <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={{ uri: tin }} /> :
        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={{ uri: index % 3 ? tin2 : tin1 }} />}
      <View style={{ position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'red', left: 5, top: 5, borderWidth: 3, borderColor: '#2E64FE' }} >
        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png' }} />
      </View>
      <Text style={{ position: 'absolute', bottom: 10, left: 5, width: 80, color: '#fff', fontWeight: 'bold' }} numberOfLines={1} >{item.title}</Text>
    </TouchableOpacity>

  );


  return (
    <AuthContext.Consumer>
      {({ isLoggedIn, toggleLoggedIn }) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }} >
          <FlatList
            // numColumns={2}
            ListHeaderComponent={
              <View>
                <View style={{}} >
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: 25, fontWeight: 'bold', color: '#0040FF', marginLeft: 10 }}>Meta Ninja</Text>
                    <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BDBDBD' }} >
                      <MaterialCommunityIcons name={'magnify'} size={18} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('ChatScreen')} 
                    style={{ height: 26, width: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BDBDBD', marginHorizontal: 10, }} >
                      <MaterialCommunityIcons name={'message-minus'} size={18} color='#000' />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginLeft: 10, paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 15 }} source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png' }} />
                    <TouchableOpacity style={{ flex: 1, paddingVertical: 5 }}>
                      <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: '400' }}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ height: 5, backgroundColor: '#E6E6E6' }} />
                <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10 }}>
                  <TouchableOpacity style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#0040FF' }}>
                    <Text style={{ textAlign: 'center', flex: 1, fontSize: 13, paddingBottom: 10 }}>Tin</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, }}>
                    <Text style={{ textAlign: 'center', flex: 1, fontSize: 13, paddingBottom: 10 }}>Reels</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 10, backgroundColor: '#F2F2F2' }} />
                <FlatList
                  style={{ paddingLeft: 10, paddingBottom: 10, }}
                  horizontal={true}
                  ListHeaderComponent={
                    <TouchableOpacity style={{ width: 100, marginRight: 10, borderWidth: 0.5, borderRadius: 10, borderColor: '#BDBDBD', height: 140, alignItems: 'center' }} >
                      <Image style={{ height: 90, width: '100%', resizeMode: 'stretch', borderRadius: 10 }} source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png' }} />
                      <Image style={{ height: 30, width: 50, resizeMode: 'contain', borderRadius: 10 }} source={{ uri: 'https://hoigicungbiet.com/wp-content/uploads/2018/09/Add-l%C3%A0-g%C3%AC-M%E1%BB%99t-s%E1%BB%91-c%E1%BB%A5m-t%E1%BB%AB-ph%E1%BB%95-bi%E1%BA%BFn-v%E1%BB%9Bi-%E2%80%9CAdd%E2%80%9D.png' }} />
                      <Text>Tao tin</Text>
                    </TouchableOpacity>
                  }
                  data={data}
                  renderItem={renderItem2}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                />
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
      )}
    </AuthContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});
export default LoginScreen;