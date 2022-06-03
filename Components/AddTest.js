import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function AddTest() {
    const [name, setName] = React.useState();
    const [question, setQuestion] = React.useState();
    const [A, setA] = React.useState();
    const [B, setB] = React.useState();
    const [C, setC] = React.useState();
    const [D, setD] = React.useState();
    const [correctOption, setCorrectOption] = React.useState();
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("172.27.96.1:6000/test/addTest", {
              university: name,
              question,
              A,
              B,
              C,
              D,
              correctOption,
            });
            alert(res.data)
        } catch (error) {
            
        }
    }
  return (
    <ScrollView>
        <View style = {styles.container}>
      <Text style = {{fontSize: 24, marginBottom: 20, textAlign: 'center'}}>Add Mock Test</Text>
      <View>
          <Text>University Name</Text>
          <TextInput placeholder='Enter University Name' style = {styles.input} onChangeText = {setName} />
      </View>
      <View>
          <Text>Enter Question</Text>
          <TextInput placeholder='Enter Question' style = {styles.input} onChangeText = {setQuestion} />
      </View>
      <View>
          <Text>Enter Option A</Text>
          <TextInput placeholder='Enter Option A' style = {styles.input} onChangeText = {setA} />
      </View>
      <View>
          <Text>Enter Option B</Text>
          <TextInput placeholder='Enter Option B' style = {styles.input} onChangeText = {setB} />
      </View>
      <View>
          <Text>Enter Option C</Text>
          <TextInput placeholder='Enter Option C' style = {styles.input} onChangeText = {setC} />
      </View>
      <View>
          <Text>Enter Option D</Text>
          <TextInput placeholder='Enter Option D' style = {styles.input} onChangeText = {setD} />
      </View>
      <View>
          <Text>Enter Correct Option</Text>
          <TextInput placeholder='Enter Correct Option' style = {styles.input} onChangeText = {setCorrectOption} />
      </View>
      <View>
          <Pressable onPress={submit} style = {styles.btn}><Text style = {{color: 'white'}}>Submit</Text></Pressable>
      </View>
    </View>
    </ScrollView>
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