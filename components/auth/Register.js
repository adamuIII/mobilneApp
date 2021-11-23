import React, { Component } from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native'
import firebase from 'firebase/compat/app';
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
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="name"
                onChangeText={(name)=>this.setState({name})}/>

                <TextInput
                placeholder="email"
                onChangeText={(email)=>this.setState({email})}/>

                <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}/>

                <Button
                    onPress={()=>this.onSignUp()}
                    title="Sign up"
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
 
})

export default Register
