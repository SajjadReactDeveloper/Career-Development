import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react';
import axios from 'axios';

export default function AddFile() {
    const [link, setLink] = React.useState();

    const submit = async(e) => {
        alert(link)
        e.preventDefault();
        try {
            const res = await axios.post("http://172.27.96.1:6000/pdf/uploadFiles", { pdf: link });
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, marginBottom: 20, textAlign: 'center'}}>Upload PDF Files</Text>
      <View>
          <Text>Enter File Link</Text>
          <TextInput placeholder='Enter File Link' style = {styles.input} onChangeText = {setLink} />
      </View>
      <View>
          <Pressable style = {styles.btn}><Text style = {{color: 'white'}} onPress = {submit}>Submit</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        marginTop: 10
    },
    btn: {
        backgroundColor: 'green',
        padding: 10,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'flex-end'
    }
})