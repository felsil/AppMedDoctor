import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View,  Text } from 'react-native';
import Store from './Store/Store';

import Seleccion from './Seleccion';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Provider store={Store}>
          <Seleccion />
        </Provider>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Component: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
  },
});


