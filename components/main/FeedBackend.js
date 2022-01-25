import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase/compat/app';


class FetchListScreen extends Component {

    constructor() {
        super();
        this.docs = firebase.firestore().collection('items');
        this.state = {
          isLoading: true,
          items: []
        };
      }
    
      componentDidMount() {
        this.unsubscribe = this.docs.onSnapshot(this.getitemsData);
      }
    
      componentWillUnmount(){
        this.unsubscribe();
      }
    
      getitemsData = (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((res) => {
          const { amount, name } = res.data();
          items.push({
            key: res.id,
            amount,
            name
          });
        });
        this.setState({
          items,
          isLoading: false
       });
      }
    
    
    
      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="red"/>
            </View>
          )
        }    
        return (
          <ScrollView style={styles.wrapper}>
              {
                this.state.items.map((res, i) => {
                  return (
                    <ListItem 
                       key={i}           
                       bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>{res.name}</ListItem.Title>
                        <ListItem.Subtitle>{res.amount}</ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron 
                         color="black" 
                      />
                    </ListItem>
                  );
                })
              }
          </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      wrapper: {
       flex: 1,
       paddingBottom: 22
      },
      loader: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',    
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    })

export default FetchListScreen;