import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function AddVideo() {
    const [name, setName] = React.useState();
    const [link, setLink] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("172.27.96.1:6000/video/uploadVideos", { video: link });
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, marginBottom: 20, textAlign: 'center', color: 'black'}}>Upload Video Lectures</Text>
      <View>
          <Text style = {{ color: 'black' }}>Enter Lecture Name</Text>
          <TextInput placeholderTextColor={"black"} placeholder='Enter Lecture Name' style = {styles.input} onChangeText = {setName} />
      </View>
      <View>
          <Text style = {{ color: 'black' }}>Enter Video Link</Text>
          <TextInput placeholderTextColor={"black"} placeholder='Enter Video Link' style = {styles.input} onChangeText = {setLink} />
      </View>
      <View>
          <Pressable onPress={submit} style = {styles.btn}><Text style = {{color: 'white'}}>Submit</Text></Pressable>
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
        marginTop: 10,
        color: 'black'
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