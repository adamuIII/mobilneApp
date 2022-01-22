import React, { Component } from 'react'
import {View,TouchableOpacity,TextInput,StyleSheet,Text,ImageBackground} from 'react-native'
import firebase from 'firebase/compat/app';
import backgroundImage from '../../assets/backgroundlogreg.png'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: '',
            name: ''

        }
        this.onSignUp=this.onSignUp.bind(this)
    }


    onSignUp(){
        const{email,password,name}=this.state; 
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result)=>{
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email
            })
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
            
        })
    }




    render() {
        return (
            <View style={styles.container}>
                 <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.image}>
                <TextInput  style={styles.inputView}
                placeholder="Name"
                onChangeText={(name)=>this.setState({name})}/>

                <TextInput  style={styles.inputView}
                placeholder="Email address"
                onChangeText={(email)=>this.setState({email})}/>

                <TextInput  style={styles.inputView}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}/>

                <TouchableOpacity

                    style={styles.signup}
                    onPress={()=>this.onSignUp()}
                    title="Sign up">
                    <Text style={styles.textStyles}>Register</Text>
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



export default Register
