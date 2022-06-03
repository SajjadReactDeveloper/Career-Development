import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigation = useNavigation();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://172.27.96.1:6000/user/login', {email, password});
            await AsyncStorage.setItem('firstLogin', 'true');
            await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
            alert(res.data.msg);
            console.log(res.data.admin)
            if(res.data.admin == 1){
              navigation.navigate('Dashboard');
            }
            else{
              navigation.navigate('UserDashboard');
            }
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white'}}>Login</Text>
      <View style={styles.sectionStyle}>
          <MaterialCommunityIcons name='email' size={28} style = {{marginRight: 7, marginLeft: 7}} />
          <TextInput
            style={{flex: 1, height: 100}}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.sectionStyle}>
          <FontAwesome name='lock' size={24} style = {{marginRight: 7, marginLeft: 7}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Password"
            underlineColorAndroid="transparent"
            onChangeText={setPassword}
          />
        </View>
        <Text style = {{justifyContent: 'flex-end', marginTop: 20, color: 'white'}} onPress = {() => {
          navigation.navigate('ForgotPassword')
        }}>Forgot Password?</Text>
        <Pressable style = {styles.btn} onPress={submit}>
            <Text style = {{color: 'white'}}>Login</Text>
        </Pressable>
        <Text style = {{color: 'white'}} onPress={() => {
            navigation.navigate('Signup')
        }}>Don't have an Account? Sign Up</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btn: {
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 6,
      marginTop: 20,
      marginBottom: 20,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
  }
})