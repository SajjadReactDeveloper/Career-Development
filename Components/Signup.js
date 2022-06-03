import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://172.27.96.1:6000/user/register', {name, email, password});
            alert(res.data);
            navigation.navigate('Login');
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white'}}>Sign Up</Text>
      <View style={styles.sectionStyle}>
          <MaterialCommunityIcons name='email' size={28} style = {{marginRight: 7, marginLeft: 7}} />
          <TextInput
            style={{flex: 1, height: 100}}
            placeholder="Enter Name"
            underlineColorAndroid="transparent"
            onChangeText={setName}
          />
        </View>
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
        <View style={styles.sectionStyle}>
          <FontAwesome name='lock' size={24} style = {{marginRight: 7, marginLeft: 7}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
          />
          </View>
        <Pressable onPress={submit} style = {styles.btn}>
            <Text style = {{color: 'white'}}>Sign Up</Text>
        </Pressable>
        <Text style = {{color: 'white'}}>Already have an Account? Log in</Text>
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
    height: 40,
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
      width: 100,
      marginBottom: 20,
      alignItems:'center'
  }
})