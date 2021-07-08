
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color:'white'}}>hola mi gente</Text>
          </View>
          <View style={styles.headerLeft}>
            <Text style={{color:'white'}}>hola mi gente</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={{color:'white'}}>hola mi gente</Text>
          </View>

          <TouchableOpacity><Text>holla</Text></TouchableOpacity>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'blue',
    flexDirection :'column'
    // justifyContent: 'center',
    // alignItems:'center',
  },
  header : {
    flex: 1,
    backgroundColor: 'gray'
  },
  headerLeft : {
    flex: 4,
    backgroundColor: 'yellow'
  },
  headerRight : {
    flex: 4,
    backgroundColor: 'green'
  }
}) 

     