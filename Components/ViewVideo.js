import { StyleSheet, Text, View, Pressable, Linking } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ViewVideo({navigation}) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/video/viewVideos");
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
      <Text>View Videos</Text>
      {data.map(item => (
          <Pressable style = {{padding: 10}} onPress = {() => {submit(item.video)}}>
              <Text style = {{color: 'black'}}>{item.video}</Text>
          </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})