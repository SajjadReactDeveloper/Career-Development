import { StyleSheet, Text, View, Pressable, Linking } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ViewFile() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/pdf/viewFiles");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const submit = async(url) => {
        await Linking.openURL(url);
    }
  return (
    <View>
      <Text style = {{textAlign: 'center', fontSize: 20, color: 'black', margin: 10}}>View File</Text>
      {data.map((item,i) => (
          <Pressable style = {{padding: 10}} onPress = {() => {submit(item.pdf)}}>
              <Text style = {{color: 'black'}}>Lecture {i+1}</Text>
          </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})