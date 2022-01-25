import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{Component} from'react';
import { StyleSheet} from 'react-native';
import{View, Text} from 'react-native';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

//zmiana z reducer na reducers
import Reducers from './components/redux/reducers';
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreen from './components/main/Edit'
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import About from './components/auth/About';
import AR from './components/auth/AR';
import DS from './components/auth/DS';
import BT from './components/auth/BT';
import MainScreen from './components/Main'
import LoginScreen from './components/auth/Login';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const store = createStore(Reducers,applyMiddleware(thunk))

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


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,

    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })

      }
    })

  }
  render() {
    const{loggedIn,loaded}=this.state;
    if(!loaded){
      return(
        
          <View style={{flex: 1,justifyContent:"center"}}>
            <Text>Loading</Text>
          </View>
        
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator 
    
          //Animacja zmiany ekranu
          screenOptions={{gestureEnabled: true, gestureDirection: "vertical"}} 
          initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="AR" component={AR}/>
            <Stack.Screen name="DS" component={DS}/>
            <Stack.Screen name="BT" component={BT}/>
    
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <Provider store={store}>  
      <NavigationContainer>      
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>  
 
     </Provider> 
  )

  }
}

export default App




