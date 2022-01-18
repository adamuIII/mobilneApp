import React, { Component } from 'react'
import {View,TouchableOpacity,TextInput,StyleSheet,Text} from 'react-native'
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
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputView}
                placeholder="email"
                onChangeText={(email)=>this.setState({email})}/>

                <TextInput style={styles.inputView}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}/>

                <TouchableOpacity

                    style={styles.signup}
                    onPress={()=>this.onSignUp()}
                    title="Sign in">
                    <Text style={styles.textStyles}>Login</Text>
                    </TouchableOpacity>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

     
 },
 signup:{
    color:"black",
    backgroundColor:"#32a895",
    textAlign: 'center'
},



})

export default Login
