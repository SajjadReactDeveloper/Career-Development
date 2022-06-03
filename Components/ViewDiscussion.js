import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function ViewDiscussion({navigation}) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/discussion/viewQuery");
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View>
      {data.map((item, i) => (
          <View style = {{borderWidth: 1, margin: 10, padding: 10}}>
              <Text>{item.query}</Text>
                {item.response.map((item,i) => (
                <>
                    <Text>Answer {i+1}: {item}</Text>
                
                </>
            ))}
            <Pressable style = {styles.btn} onPress = {() => {
                navigation.navigate('ResponseForm', {data: item})
            }}>
                    <Text style = {{color: 'white'}}>Give Response</Text>
                </Pressable>
          </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor:'green',
        padding: 10,
        width: 130
    }
})