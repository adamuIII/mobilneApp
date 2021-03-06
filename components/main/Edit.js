import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, NativeModules} from 'react-native';
import { Camera } from 'expo-camera';
import { Button} from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/native'
import firebase from 'firebase/compat/app';
import * as FileSystem from 'expo-file-system';
import 'firebase/compat/firestore';




export default function App() {


  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null)
  const [preview, setPreview] = useState(false)
  const [accept, isAccepted] = useState(false)
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const isFocused = useIsFocused();
  const [base64, setBase64] = useState('');
  
  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={{fontSize: 30, color: 'red'}}>No access to camera</Text>;
  }
  return (
    <View style={{flex:1}}>
       <View style={styles.cameraContainer}>

         
         { isFocused && !preview && !accept && <Camera 
         style={styles.fixedRatio}
         ratio={'4:3'}
         pictureSize={'1280x720'}
         type={type}
         ref={ref => {
          this.camera = ref;
        }}
         />}

        {preview && !accept && <Image style={styles.fixedRatio} source={{uri: photo}} />}
        

      </View> 
      {!preview && !accept && <Button
            title="Change Camera"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text> Change Camera </Text>
          </Button>}
      {!preview && !accept && <Button
            title="Take Picture"
            onPress={async () =>{
              if(this.camera){
                let photo = await this.camera.takePictureAsync({quality: 0});
                setPhoto(photo.uri);
                const base64 = await FileSystem.readAsStringAsync(photo.uri, { encoding: 'base64' });
                setBase64(base64);
                setPreview(true);
              }
            }
            }>
            <Text> Take Picture </Text>
          </Button>}
      
      {preview && !accept && <Button
            title="Accept"
            onPress={async () => {
              isAccepted(true);
              setPreview(false);
            }}>
            <Text> Accept photo </Text>
          </Button>}
      {preview && !accept && <Button
            title="Retake"
            onPress={() =>{setPreview(false)}}>
            <Text> Retake photo </Text>
          </Button>}      
      
      {!preview && accept && <TextInput  style={styles.inputView}
            placeholder="Amount"
                onChangeText={(amount1)=>setAmount(amount1)}/>}

      {!preview && accept && <TextInput  style={styles.inputView}
            placeholder="Name"
            onChangeText={(name1)=>setName(name1)}/>}

            {!preview && accept && <TouchableOpacity

                    style={styles.signup}
                    onPress={()=>{
                      firebase.firestore().collection('items').add({
                        amount: amount,
                        name: name,
                        photo: base64
                      });
                      isAccepted(false);
                    }}
                    title="Add">
                    <Text style={styles.textStyles}>Add new item!</Text>
            </TouchableOpacity>}
          <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
    cameraContainer:{
        flex:1,
    
    },
    fixedRatio:{
        flex:1,
        aspectRatio:1,

    },

    signup:{
      backgroundColor:'#74a5ad',
      paddingBottom:10,
      paddingTop:10,
      borderStyle:"solid",
      borderRadius:10,
      maxWidth:"50%",
      marginTop:20,
      textAlign:'center',
      marginLeft:"25%"
  },
  
  inputView:{
      backgroundColor:'rgb(171,219,227)',
      paddingBottom:10,
      paddingTop:10,
      borderStyle:"solid",
      borderRadius:10,
      maxWidth:"50%",
      marginTop:20,
      textAlign:'center',
      marginLeft:"25%"
  },
  
  TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
  
    textStyles:{
      textAlign:'center',
      padding:5,
    }
  
})
