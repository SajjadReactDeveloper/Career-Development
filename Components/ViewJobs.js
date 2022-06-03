import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function ViewJobs({navigation}) {
    const [data, setData] = React.useState([]);
    const [searchJob, setSearch] = React.useState();
    const [companyname, setCompanyName] = React.useState();
    const [job, setJob] = React.useState([]);
    const [jobs, setJobs] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("http://172.27.96.1:6000/job/viewJobs");
            setData(res.data);
        } catch (error) {
            
        }
    }

    const search = async(e) => {
      e.preventDefault();
      console.log(searchJob);
      try {
            const res = await axios.post("http://192.168.10.9:6000/job/searchbylocation", {location: searchJob});
            setJob(res.data);
        } catch (error) {
            
        }
    } 

    const filterDate = async(e) => {
      e.preventDefault();
      try {
            const res = await axios.get("http://192.168.10.9:6000/job/searchbyDate");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
  return (
    <View>
      <Text style = {{fontSize: 20, textAlign: 'center', margin: 10, color: 'black'}}>All Jobs</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput onChangeText={setSearch} style = {styles.input} placeholder='Search by Area or Company Name' />
            <Pressable onPress={search} style = {{backgroundColor: 'black', padding: 16}}>
                <Text style = {{color: 'white'}}>Search</Text>
            </Pressable>
        </View>
        <Pressable onPress={filterDate} style = {{backgroundColor: 'green', padding: 10, width: 130, margin: 20, alignSelf: 'flex-end'}}>
            <Text style = {{color: 'white'}}>Filter by Date</Text>
        </Pressable>
        {searchJob ? job.map(item => (
            <ScrollView style = {styles.main}>
                <Text style = {styles.text}>{item.title}</Text>
                <Text style = {styles.text}>{item.description}</Text>
                <Text style = {styles.text}>{item.location}</Text>
                <Text style = {styles.text}>{item.experience}</Text>
                <Pressable onPress={()=>{
                    navigation.navigate('UploadAttachments')
                }} style = {styles.btn}>
                    <Text style = {{color: 'black'}}>Apply Now</Text>
                </Pressable>
            </ScrollView>
        )): data.map(item => (
            <ScrollView style = {styles.main}>
                <Text style = {styles.text}>{item.title}</Text>
                <Text style = {styles.text}>{item.description}</Text>
                <Text style = {styles.text}>{item.location}</Text>
                <Text style = {styles.text}>{item.experience}</Text>
                <Pressable onPress={()=>{
                    navigation.navigate('UploadAttachments')
                }} style = {styles.btn}>
                    <Text style = {{color: 'black'}}>Apply Now</Text>
                </Pressable>
            </ScrollView>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'green',
        margin: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    btn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        width: 100,
        marginTop: 10,
        alignSelf: 'flex-end'
    },
    input: {
        borderWidth: 1,
        padding: 10
    }
})