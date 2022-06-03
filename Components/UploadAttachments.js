import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native'
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';


export default function UploadAttachments() {
    const [cv, setImage] = React.useState(null);
    const [matric, setMatric] = React.useState(null);
    const [fsc, setFsc] = React.useState(null);

    const options = 
        {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true, 
        }

    const pickCV = async () => 
    {
        launchImageLibrary({mediaType: 'photo',
      quality: 1,
      includeBase64: true}, response => 
        {     
            if(response.didCancel)
            {
                alert('Cancel')
            }
            else{
                setImage(response.assets[0])
            }
    })
    }

  const submit = async(e) => {
        e.preventDefault();
        try {
            launchImageLibrary({mediaType: 'photo',
                quality: 1,
                includeBase64: true}, response => 
                {            
                    setImage(response.assets[0].base64);
                })
        } catch (error) {
            
        }
    }
  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 22, marginBottom: 10}}>Upload Attachments</Text>
      <Pressable style = {styles.btn}>
          <Text style = {{color: 'white'}} onPress={submit}>Upload CV</Text>
      </Pressable>
        <Image source={{uri: 'data:image/png;base64,' +cv}} style = {{width: 100, height: 100}} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    btn: {
        backgroundColor: 'blue',
        padding: 15,
        width: 180,
        margin: 10,
        alignItems: 'center',
        borderRadius: 7
    }
})