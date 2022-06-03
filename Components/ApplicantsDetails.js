import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ApplicantsDetails({route, navigation}) {
     const {data} = route.params;
     console.log(data);
  return (
    <View>
      <Text>Applicants Details</Text>
      <Image source={data.cv} style = {{width: 150, height: 150}} />
    </View>
  )
}

const styles = StyleSheet.create({})