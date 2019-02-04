import React, { Component } from 'react';
import { Alert as RNAlert } from 'react-native';
import Button from './Button';

class Alert extends Component {
    state = {RNAlertVisible: true };
  render(){
      return(

        handleAlert = () => {
            RNAlert.alert('A simple alert', 'With a simple message', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              { text: 'OK', onPress: () => {} },
            ]);
          }
      )  }
}

export default Alert;