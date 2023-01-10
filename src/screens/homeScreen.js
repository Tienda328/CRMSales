import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
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
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={[styles.container,]}>
          <View style={{ backgroundColor: 'red', flexDirection: "row", padding:10 }}>
            <MaterialCommunityIcons name={'magnify-expand'} size={25} color='#3D3C42' />
            <TextInput
              style={styles.txtTextInput}
              labelValue={search}
              onChangeText={(text) => setSearch(text)}
              placeholder='Tìm kiếm ....'
            />
          </View>

        </ScrollView>
      </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackgroudNen
  },

});
export default HomeScreen;