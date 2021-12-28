import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Button} from 'react-native-paper'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
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
         <Camera 
         style={styles.fixedRatio}
         type={type}
         ratio={'1:1'}/>
         
 
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
