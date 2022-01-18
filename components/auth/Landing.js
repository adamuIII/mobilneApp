import React from 'react'
import { StyleSheet,Text,View,ImageBackground,TouchableOpacity } from 'react-native'
import backgroundImage from '../../assets/background.png'


export default function Landing({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.image}>
           
            <View style={styles.buttonContainer} title="buttonContainer">
                <View style={styles.b1}>
                    <TouchableOpacity
                    style={styles.button}
                    title="Login"
                    onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.textStyles}>Login</Text>
                    </TouchableOpacity>
                </View>
         
                <View style={styles.b2}>
                    <TouchableOpacity
                    style={styles.button}
                    title="Register"
                    onPress={()=>navigation.navigate("Register")}>
                    <Text style={styles.textStyles}>Register</Text>
                </TouchableOpacity>
            </View>

            </View>

            </ImageBackground>
        </View>

    );
}



const styles = StyleSheet.create({
    container:{
        flex:1, 

        
    },
    image: {
        width: '100%',
        height: '115%',
        flex: 1,
        justifyContent:"center"
      },

    buttonContainer:{

        display:"flex",
        justifyContent:'center',
        marginTop:"100%"
 
    },

    button:{
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
    b1:{
        
    },

    b2:{
        
    },

    textStyles:{
        fontFamily:"Verdana",
        color:"#454954",
        fontWeight:"bold"
    }


})