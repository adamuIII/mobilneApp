import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, NativeModules} from 'react-native';
import { Camera } from 'expo-camera';
import { Button} from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/native'
import firebase from 'firebase/compat/app';
import { MediaLibrary } from 'expo-media-library';
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
  //const [status, requestPermission] = MediaLibrary.usePermissions();
  
  

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
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex:1}}>
       <View style={styles.cameraContainer}>

         
         { isFocused && !preview && !accept && <Camera 
         style={styles.fixedRatio}
         ratio={'1:1'}
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
                let photo = await this.camera.takePictureAsync();
                setPhoto(photo.uri);
                //alert(photo.uri);
                setPreview(true);
              }
            }
            }>
            <Text> Take Picture </Text>
          </Button>}
      
      {preview && !accept && <Button
            title="Accept"
            onPress={async () => {
              await MediaLibrary.saveToLibraryAsync(photo.uri);
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
                        photo: 'http://i.wpimg.pl/1920x0/portal-abczdrowie.wpcdn.pl/imageCache/2019/01/03/krolik-miniaturka_8a40.jpg'
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
