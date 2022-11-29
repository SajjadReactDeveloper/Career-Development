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
            <Text style = {{ color: 'black' }}>View Jobs</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewTest')
        }}>
            <Text style = {{ color: 'black' }}>View Test</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewFile')
        }}>
            <Text style = {{ color: 'black' }}>View PDF</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewVideo')
        }}>
            <Text style = {{ color: 'black' }}>View Videos</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewPaper')
        }}>
            <Text style = {{ color: 'black' }}>View Papers</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('DiscussionForm')
        }}>
            <Text style = {{ color: 'black' }}>Discussion Form</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('ViewDiscussion')
        }}>
            <Text style = {{ color: 'black' }}>View Discussion</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('Login')
        }}>
            <Text style = {{ color: 'black' }}>Logout</Text>
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