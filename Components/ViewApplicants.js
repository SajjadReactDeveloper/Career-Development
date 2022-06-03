import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function ViewApplicants({navigation}) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/file/viewApplicants");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View>
      <Text style = {{color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold', margin: 10}}>ViewApplicants</Text>
      {data.map(item => (
          <View>
              <Pressable style = {{padding: 10}} onPress = {() => {
              navigation.navigate('ApplicantDetails', {data: item})
          }}>
                  <Text style = {{color: 'black', fontSize: 18}}>{item._id}</Text>
              </Pressable>
          </View>
      ) )}
    </View>
  )
}

const styles = StyleSheet.create({})