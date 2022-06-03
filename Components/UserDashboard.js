import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useGetUserQuery } from '../services/userAuthApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserDashboard({navigation}) {
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white'}}>User Dashboard</Text>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewJobs')
        }}>
            <Text>View Jobs</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewTest')
        }}>
            <Text>View Test</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewFile')
        }}>
            <Text>View PDF</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewVideo')
        }}>
            <Text>View Videos</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewPaper')
        }}>
            <Text>View Papers</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('DiscussionForm')
        }}>
            <Text>Discussion Form</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewDiscussion')
        }}>
            <Text>View Discussion</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('Login')
        }}>
            <Text>Logout</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    btn: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: 150, 
        margin: 20,
        alignItems: 'center'
    }
})