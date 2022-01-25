import React from 'react'
import {View, TouchableOpacity, Linking, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native'
import backgroundImage from '../../assets/backgroundlogreg.png'

export default function DS() {
    return(
        <View style={styles.container}>
            <ImageBackground source={require=(backgroundImage)} resizeMode="cover" style={styles.imageb}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container} title="Container">
                        <View style={styles.top} >
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://github.com/adamuIII')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png'}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.middle} >
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.facebook.com/adam.rzepka.121')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png'}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.middle} >
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://csgorankings.com/profile/76561198224724832')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/csgo_squircle-512.png'}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.middle} >
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://steamcommunity.com/profiles/76561198224724832')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons.flaticon.com/png/512/3670/premium/3670382.png?token=exp=1643129532~hmac=2e2aac0dbb20483b8a64c7462a05044e'}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity
                                onPress={ ()=>{ Linking.openURL('https://www.instagram.com/adam.rzepka/')}}>
                                <Image
                                    style={styles.imagel}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'}}
                                />
                            </TouchableOpacity>
                        </View>
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
        paddingBottom:20,
        paddingTop:20,
        borderStyle:"solid",
        borderRadius:10,
        maxWidth:20,
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
    scrollView:{
        marginHorizontal: 20,
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