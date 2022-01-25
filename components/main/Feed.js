import React from 'react'
import {View,Text,Button} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import firebase from 'firebase/compat/app'

export default function Feed() {

   const fetchowanko = async ()=>{
        firebase.firestore().collection('items').doc('1h5SfRUZtqZFOdxocBax').get().then(doc => {
           if(doc.exists){
              console.log(doc.data().name);  
            }
        }
        )};
        

    return (
        <View>
            <StatusBar hidden />
            <Button
            title="costam"
            onPress={() =>{fetchowanko()}}>
          </Button>
          <Text> a </Text>
        </View>
    )
}
