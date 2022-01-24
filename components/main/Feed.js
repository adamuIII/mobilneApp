import React from 'react'
import {View,Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import firebase from 'firebase/compat/app'

export default function Feed() {
    return (
        <View>
            <StatusBar hidden />
            <Text style={{color:'#000'}}>
            Nothing here!
            </Text>
        </View>
    )
}
