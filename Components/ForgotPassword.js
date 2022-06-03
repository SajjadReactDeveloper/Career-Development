import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://172.27.96.1:6000/user/forgot', {email, password});
            alert(res.data.msg);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{textAlign: 'center', marginBottom: 20, fontSize: 24}}>Forgot Password</Text>
      <Text>Email</Text>
      <TextInput style = {styles.input} placeholder='Enter Email' onChangeText={setEmail} />
      <Text>New Password</Text>
      <TextInput style = {styles.input} placeholder='Enter New Password' />
      <Text>Confirm Password</Text>
      <TextInput style = {styles.input} placeholder='Confirm Password' onChangeText={setPassword} />
      <Pressable onPress={submit} style = {styles.btn}>
          <Text style = {{color: 'white'}}>Reset Password</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    btn: {
        backgroundColor: 'blue',
        padding: 15,
        width: 150,
        margin: 10,
        alignItems: 'center',
        borderRadius: 7,
        alignSelf: 'flex-end'
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        marginTop: 10
    },
})