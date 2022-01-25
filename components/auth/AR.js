import React from 'react'
import {View, TouchableOpacity, Linking, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'

export default function DS() {
    return(
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.imageb}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container} title="Container">
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://github.com/adamuIII')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.facebook.com/adam.rzepka.121')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://csgorankings.com/profile/76561198224724832')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/csgo_squircle-512.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://steamcommunity.com/profiles/76561198224724832')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/240px-Steam_icon_logo.svg.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.instagram.com/adam.rzepka/')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'}}
                                />
                            </TouchableOpacity>
                    </View>
                </ScrollView>
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
        marginTop:0,
        marginBottom:20,
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
    },

    scrollView: {
        marginBottom: 200,
    }

})