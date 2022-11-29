import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useGetUserQuery } from '../services/userAuthApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white'}}>Admin Dashboard</Text>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('AddJob')
        }}>
            <Text>Add Jobs</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('AddFile')
        }}>
            <Text>Upload Material</Text>
        </Pressable>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('PastPapers')
        }}>
            <Text>Past Papers</Text>
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