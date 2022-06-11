import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text,TouchableOpacity, FlatList } from 'react-native';
import { api } from '../repositories/network/api';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [data, setData] = useState([]);
    const { login } = '';
    const dispatch = useDispatch()
    useEffect(() => {
        getAptTest1();
      }, []);

      const  getAptTest1=()=>{
        api.getTypicode( dispatch,(data) => {
            setData(data)
          });
      }
      const renderItem = ({ item }) => (
        <Item title={item.title} />
       
      );

      const Item = ({ title }) => (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      );

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, toggleLoggedIn }) => (
                <View style={{ flex: 1, backgroundColor: '#fff',}} >
                    <View style={{ alignItems: 'center' }} >
                        <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsX9T0dQcbVzbu8ssxwM0INCkJNXHXe8-GgQ&usqp=CAU' }} />
                    </View>
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                  

                </View>
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