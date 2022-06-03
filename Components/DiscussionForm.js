import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function DiscussionForm() {
    const [query, setQuery] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://172.27.96.1:6000/discussion/addQuery', {query});
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{textAlign: 'center', marginBottom: 20, fontSize: 24}}>Post Query</Text>
      <Text>Enter Query</Text>
      <TextInput style = {styles.input} placeholder='Enter your Query' onChangeText={setQuery} />
      <Pressable onPress={submit} style = {styles.btn}>
          <Text style = {{color: 'white'}}>Send</Text>
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