import React from 'react'
import {View, TouchableOpacity, Linking, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'

export default function BT() {
    return(
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.imageb}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container} title="Container">
                                <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.twitch.tv/kefak123')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons.flaticon.com/png/512/3291/premium/3291659.png?token=exp=1643128726~hmac=3315c0fff3b6eff070c2dd6424b9b857'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://csgorankings.com/profile/76561198120034184')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/csgo_squircle-512.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://steamcommunity.com/id/kefaczek')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons.flaticon.com/png/512/3670/premium/3670382.png?token=exp=1643129532~hmac=2e2aac0dbb20483b8a64c7462a05044e'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://github.com/kefaczur')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://euw.op.gg/summoner/userName=drmeowmeowkitty')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon29.jpg'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.facebook.com/martynalutczyk123')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.instagram.com/superkefak/')}}>
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