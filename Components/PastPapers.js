import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function PastPapers() {
    const [university, setUniversity] = React.useState();
    const [year, setYear] = React.useState();
    const [link, setLink] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://172.27.96.1:6000/paper/addPaper", { university, year, pdf: link });
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, marginBottom: 20, textAlign: 'center'}}>Upload Past Papers</Text>
      <View>
          <Text>Enter University Name</Text>
          <TextInput placeholder='Enter University Name' style = {styles.input} onChangeText = {setUniversity} />
      </View>
      <View>
          <Text>Enter Year</Text>
          <TextInput placeholder='Enter Year' style = {styles.input} onChangeText = {setYear} />
      </View>
      <View>
          <Text>Enter File Link</Text>
          <TextInput placeholder='Enter File Link' style = {styles.input} onChangeText = {setLink} />
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