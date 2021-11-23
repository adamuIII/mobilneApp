import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBvcpe34TaYp84pczKnKVzApMj_Fi5kn40",
  authDomain: "warehouse-organiser.firebaseapp.com",
  projectId: "warehouse-organiser",
  storageBucket: "warehouse-organiser.appspot.com",
  messagingSenderId: "722801814737",
  appId: "1:722801814737:web:c202d88b04201ddb0f29f0",
  measurementId: "G-PWBK4GG1LG"
};

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig)
}






// const Stack bedzue przechowywac sceny naszej aplikacji
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 

      //Animacja zmiany ekranu
      screenOptions={{gestureEnabled: true, gestureDirection: "vertical"}} 
      initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}


