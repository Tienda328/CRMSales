import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, FlatList, StatusBar, Dimensions } from 'react-native';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../constants/colors';
import { AuthContext } from '../context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ReportScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [ShowAll, setShowAll] = useState(false);
  const [data, setData] = useState([]);
  const [isFetching, setisFetching] = useState(false);
  const dispatch = useDispatch()
  // useEffect(() => {
  //   getAptTest1();
  // }, []);

  // const getAptTest1 = () => {
  //   api.getTypicode(dispatch, (data) => {
  //     setData(data)
  //   });
  // }

  const onShow = () => {
    setShowAll(!ShowAll);
  }


  return (
    <AuthContext.Consumer>
      {({ isLoggedIn, toggleLoggedIn }) => (
        <View style={[styles.container,]}>
            <StatusBar barStyle="light-content" backgroundColor={colors.colorBackgroudNen} />
          <ScrollView style={[styles.container,]}>
          <View style={[styles.containerHeader,{height:ShowAll?windowHeight / 4.3:windowHeight / 5}]}>
            <View style={{ marginTop: windowHeight / 20, marginHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-0L7CJ1biaLHo2SL-71j6H5I-QPAHqBn7WW9eokSe6ber51W9niawJ77L9zw87O3-mw&usqp=CAU' }} />
              <Text style={{ fontSize: 25, fontWeight: "bold", color: '#fff', marginLeft: 16 }}>Tik Tok Shop</Text>
            </View>
            <View style={{ backgroundColor: '#fff', position: 'absolute', padding: 10, paddingVertical: 16, borderRadius: 10, top: windowHeight / 7, width: windowWidth / 1.2, alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#0096FF' }}>40</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#0096FF', width: windowWidth / 4, textAlign: 'center' }}>Đơn hàng</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#5BB318' }}>0</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#5BB318', width: windowWidth / 4, textAlign: 'center' }}>Thành công</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#E64848' }}>0</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#E64848', width: windowWidth / 4, textAlign: 'center' }}>Đơn huỷ - hoàn</Text>
                </View>
              </View>
              {ShowAll ? <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#0096FF' }}>40</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#0096FF', width: windowWidth / 4, textAlign: 'center' }}>Đơn hàng</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#5BB318' }}>0</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#5BB318', width: windowWidth / 4, textAlign: 'center' }}>Thành công</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: '#E64848' }}>0</Text>
                  <Text style={{ fontSize: 12, marginTop: 5, color: '#E64848', width: windowWidth / 4, textAlign: 'center' }}>Đơn huỷ - hoàn</Text>
                </View>
              </View> : null}
              <TouchableOpacity style={styles.containerShow}
                onPress={onShow}
              >
                <MaterialCommunityIcons name={ShowAll ? 'chevron-up' : 'chevron-down'} size={25} color='#3D3C42' />
              </TouchableOpacity>
            </View>
           
          </View>
          <View style={{marginTop:ShowAll?windowHeight / 10:windowHeight / 18, flex:1,}}>
            <Text>ssfdfds</Text>
           
          </View>
        </ScrollView>
        </View>

      )}
    </AuthContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackgroudNen
  },
  containerHeader: {
    height: windowHeight / 5.5,
    backgroundColor: colors.colorAll,
    borderBottomLeftRadius: windowHeight / 30,
    borderBottomRightRadius: windowHeight / 30
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  containerShow: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  title: {
    fontSize: 22,
  },
});
export default ReportScreen;