import React, { Component } from 'react'
import {View,Text} from 'react-native'
import{connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from './redux/action'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FeedScreen from './main/Feed'
import EditScreen from './main/Edit'

const Tab = createMaterialTopTabNavigator();

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator initialRouteName='Feed'>
            <Tab.Screen name="Magazyn" component={FeedScreen} options={{
                tabBarIcon: ({color,size})=>(
                   <MaterialCommunityIcons name='garage' color={color} size={20}></MaterialCommunityIcons> 
                )
            }}/>

            <Tab.Screen name="Zarządzaj"  component={EditScreen} options={{
                tabBarIcon: ({color,size})=>(
                   <MaterialCommunityIcons name='tune' color={color} size={20}></MaterialCommunityIcons> 
                   )
                   
            }}/>
          </Tab.Navigator>
        )
    }
}
const mapStateToProps = (store) =>({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch)=>bindActionCreators({fetchUser},dispatch)


export default connect(mapStateToProps,mapDispatchProps)(Main);
