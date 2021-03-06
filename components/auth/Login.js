import React, { Component } from 'react'
import {View,TouchableOpacity,TextInput,StyleSheet,Text,ImageBackground} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
            

        }
        this.onSignUp=this.onSignUp.bind(this)
    }


    onSignUp(){
        const{email,password}=this.state; 
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
            alert("Error! Incorrect login information.")
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.image}>
                <TextInput style={styles.inputView}
                placeholder="Email address"
                onChangeText={(email)=>this.setState({email})}/>

                <TextInput style={styles.inputView}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}/>

                <TouchableOpacity 
                    style={styles.signup}
                    onPress={()=>this.onSignUp()}
                    title="Sign in">
                    <Text style={styles.textStyles}>Login</Text>
                    </TouchableOpacity>
                
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
 container:{
    flex:1, 


     
 },
 image: {

    width: '100%',
    height: '130%',
    justifyContent:"center"
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

export default Login
