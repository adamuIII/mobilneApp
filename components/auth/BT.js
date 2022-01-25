import React from 'react'
import {View, TouchableOpacity, Linking, StyleSheet, Image, ImageBackground} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'

export default function BT() {
    return(
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.imageb}>
                <View style={styles.container} title="Container">
                    <View style={styles.top} >
                        <TouchableOpacity
                            onPress={ ()=>{ Linking.openURL('https://github.com/kefaczur')}}>
                            <Image
                                style={styles.imagel}
                                source={{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png'}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middle} >
                        <TouchableOpacity
                            onPress={ ()=>{ Linking.openURL('https://www.facebook.com/martynalutczyk123')}}>
                            <Image
                                style={styles.imagel}
                                source={{uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png'}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity
                            onPress={ ()=>{ Linking.openURL('https://www.instagram.com/superkefak/')}}>
                            <Image
                                style={styles.imagel}
                                source={{uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'}}
                            />
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

    imageb: {

        width: '100%',
        height: '130%',
        justifyContent:"center"
    },
    imagel:{
        paddingBottom:100,
        paddingTop:100,
        borderStyle:"solid",
        borderRadius:10,
        maxWidth:200,
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