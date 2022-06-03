import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'

const image = { uri: "https://images.unsplash.com/photo-1543616991-75a2c125ff5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" };

export default function Home({navigation}) {
  return (
    <View style = {styles.container}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
          <Text style = {{color: 'white', textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Career Development</Text>
        <Pressable style = {styles.btn} onPress = {() => {
            navigation.navigate('Login')
        }}>
            <Text style = {{color: 'black', fontSize: 22}}>Start</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    btn: {
        backgroundColor: 'white',
        padding: 15,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: '33%',
        marginTop: 500
    }
})