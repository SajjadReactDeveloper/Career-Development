import { StyleSheet, Text, View, TextInput, Pressable, Linking } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ViewPaper() {
    const [data, setData] = React.useState([]);
    const[university, setUniversity] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/paper/viewPaper");
            setData(res.data);
        } catch (error) {
            
        }
    }

    const searchUniversity = (e) => {
        setUniversity(data.filter(data => data.university.toLowerCase().startsWith(e.toLowerCase())))
        console.log(university)
    }

    const searchDate = (e) => {
        console.log(e)
      setUniversity(
        data.filter((data) =>
          data.year.toLowerCase().startsWith(e.toLowerCase())
        )
      );
    };

    const submit = async(url) => {
        await Linking.openURL(url);
    }
  return (
    <View>
      <TextInput placeholder='Search By University' style = {styles.input} onChangeText={searchUniversity} />
      <TextInput placeholder='Search By Year' style = {styles.input} onChangeText={searchDate} />
        {university ? (university.map((data, i) => (
            <View style = {styles.main}>
                <Pressable onPress = {() => {submit(data.pdf)}}>
                    <Text style = {{fontSize: 20, color: 'black'}}>Paper {i+1}</Text>
                </Pressable>
            </View>
        ))): (data.map((data, i) => (
            <View style = {styles.main}>
                <Pressable onPress = {() => {submit(data.pdf)}}>
                    <Text style = {{fontSize: 20, color: 'black'}}>Paper {i+1}</Text>
                </Pressable>
            </View>
        )))}
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 5
    }, 
    main: {
        margin: 10,
    }
})