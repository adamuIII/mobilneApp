import React from 'react'
import { StyleSheet,Text,View,Button,ImageBackground } from 'react-native'
import backgroundImage from '../../assets/background.png'


export default function Landing(navigation) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.image}>
            </ImageBackground>
            <Button
            color="#313ab0"
            title="Login"
            onPress={()=>navigation.navigate("Login")}/>
            <Button
            color="#3295a8"
            title="Register"
            onPress={()=>navigation.navigate("Register")}/>
            
            
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: 'center',
        
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1 
      },



})