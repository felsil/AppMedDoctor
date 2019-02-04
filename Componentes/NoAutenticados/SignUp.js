import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SigUpForm';


class SignUp extends Component {
    render(){
        console.log(this.props.numero)
        const { navigation } = this.props;
    return (
        <View style={style.Component}>
            <Text>SignUp</Text>
            <SignUpForm />
            <Button title="SignIn" onPress={() => { navigation.goBack(); }}/>
        </View>
        );
    }
}

const style = StyleSheet.create({
    Component: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const mapStateToProps = (state, ownProps) =>({
    numero: state.reducerPrueba,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    aumentar: () => {
        dispatch({type: 'AUMENTAR_REDUCER_PRUEBA'});
        }    
});

//export default SignUp;

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);