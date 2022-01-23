import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Button} from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/native'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null)
  const [preview, setPreview] = useState(false)
  const isFocused = useIsFocused();
  

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

         
         { isFocused, !preview && <Camera 
         style={styles.fixedRatio}
         ratio={'1:1'}
         type={type}
         ref={ref => {
          this.camera = ref;
        }}
         />}

        {preview && <Image style={styles.fixedRatio} source={{uri: photo}} />}
        

      </View> 
      {!preview && <Button
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
      {!preview && <Button
            title="Take Picture"
            onPress={async () =>{
              if(this.camera){
                let photo = await this.camera.takePictureAsync();
                setPhoto(photo.uri);
                setPreview(true);
              }
            }
            }>
            <Text> Take Picture </Text>
          </Button>}
      
      {preview && <Button
            title="Accept"
            onPress={() => {}}>
            <Text> Accept photo </Text>
          </Button>}
      {preview && <Button
            title="Retake"
            onPress={() =>{setPreview(false)}}>
            <Text> Retake photo </Text>
          </Button>}      
      

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

    }
})
