import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'

export default function ResponseForm({route, navigation}) {
    const [answer, setAnswer] = React.useState();
    const {data} = route.params;
    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://172.27.96.1:6000/discussion/addResponse/${data._id}`, {response: answer});
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{textAlign: 'center', marginBottom: 20, fontSize: 24}}>Give Response</Text>
      <Text>Answer</Text>
      <TextInput style = {styles.input} placeholder='Enter Answer' onChangeText={setAnswer} />
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