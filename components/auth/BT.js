import React from 'react'
import {View,Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import backgroundImage from '../../assets/background.png'

export default function BT() {
    return (
        <View>
            <StatusBar hidden />
            <Text style={{color:'#F12'}}>
                Cool project Bloodtrail
            </Text>

        </View>
    )
}