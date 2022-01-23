import React from 'react'
import {View,Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Feed() {
    return (
        <View>
            <StatusBar hidden />
            <Text style={{color:'#fff'}}>
            Nothing here!    
            </Text>
        </View>
    )
}
