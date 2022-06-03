import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function AddJob() {
    const [name, setName] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [location, setLocation] = React.useState();
    const [experience, setExperience] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://172.27.96.1:6000/job/addJob", { title, description, location, experience });
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, marginBottom: 20, textAlign: 'center'}}>AddJob</Text>
      <View>
          <Text>Company Name</Text>
          <TextInput placeholder='Enter Company Name' style = {styles.input} onChangeText = {setName} />
      </View>
      <View>
          <Text>Job Title</Text>
          <TextInput placeholder='Enter Job Title' style = {styles.input} onChangeText = {setTitle} />
      </View>
      <View>
          <Text>Job Description</Text>
          <TextInput placeholder='Enter Job Description' style = {styles.input} onChangeText = {setDescription} />
      </View>
      <View>
          <Text>Job Location</Text>
          <TextInput placeholder='Enter Job Location' style = {styles.input} onChangeText = {setLocation} />
      </View>
      <View>
          <Text>Experience Required</Text>
          <TextInput placeholder='Enter Experience Required' style = {styles.input} onChangeText = {setExperience} />
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