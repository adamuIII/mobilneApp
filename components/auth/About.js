import React from 'react'
import {View,TouchableOpacity,StyleSheet,Text,ImageBackground} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'

export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.image}>
                <View style={styles.buttonContainer} title="buttonContainer">
                    <View style={styles.b1}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Adam Rzepka"
                            onPress={()=>navigation.navigate("AR")}>
                            <Text style={styles.textStyles}>Adam Rzepka</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.b2}>
                        <TouchableOpacity
                            style={styles.button}
                            title="David Salwa"
                            onPress={()=>navigation.navigate("DS")}>
                            <Text style={styles.textStyles}>David Salwa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.b3}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Bartlomiej Tokar"
                            onPress={()=>navigation.navigate('BT')}>
                            <Text style={styles.textStyles}>Bartlomiej Tokar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
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