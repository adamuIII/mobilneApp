import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Button} from 'react-native-paper'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState('https://images.obi.pl/product/PL/745x320/657878_1.jpg')

  

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

         <Image style={{flex:1}} source={{uri:photo}}/>
         <Camera 
         style={styles.fixedRatio}
         ratio={'1:1'}
         type={type}
         ref={ref => {
          this.camera = ref;
        }}
         />
         
 
      </View> 
      <Button
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text> Flip </Text>
          </Button>
          <Button
            title="Take Picture"
            onPress={async () =>{
              if(this.camera){
                let photo = await this.camera.takePictureAsync();
                setPhoto(photo.uri);
              }
            }
            }>
            <Text> Take Picture </Text>
          </Button>
        
    </View>
  );
}

const styles = StyleSheet.create({
    cameraContainer:{
        flex:1,
        flexDirection:'row'
    
    },
    fixedRatio:{
        flex:1,
        aspectRatio:1,

    }
})
