import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';


class Screen2 extends Component {

  render() {
    return (
        <View style={styles.container}>
        <TouchableHighlight style={styles.touchable}>
          <View style={styles.button}>
            <Text style={styles.welcome} >CONECTARSE</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 17,
      textAlign: 'center',
      margin: 10,
      color: '#FFFFFF'
    },
    touchable: {
      borderRadius: 80
    },
    button: {
      backgroundColor: '#3D6DCC',
      borderRadius: 100,
      height: 130,
      width: 130,
      justifyContent: 'center'
    },
  });



export default Screen2;