import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    return(
    <View>
    <TextInput
    placeholder = {props.ph}
    onChangeText={props.input.onChange}
    value = {props.input.value}
    onBlur = {props.input.onBlur}
    secureTextEntry ={!!(props.input.name === 'password') }
    />
    <View style={styles.Linea } />
    { props.meta.touched && props.meta.error && <Text>{ props.meta.error }</Text> }
    </View>
    )
    }

const validate = (values) => {
    const errors = {};
    if(!values.correo){
        errors.correo='Campo Requerido'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = 'Email invalido';
    }
    if(!values.password){
        errors.password = 'Campo Requerido';
    }else if(values.password.length < 5){
        errors.password = 'deben ser al menos 5 caracteres';
    }else if(values.password.length > 15){
        errors.password = 'deben ser menor de 15 caracteres';
    }
    return errors;
};

const SignInForm = (props) => {
    console.log(props);    
    return(
        <View>
            <View>
                <Field name= "correo" component={fieldNombre} ph='correo@correo.com'/>
                <Field name= "password" component={fieldNombre} ph='******'/>
                
            </View> 
            <View style={{marginBottom:20}}>
                <Button title="INGRESAR" onPress={props.handleSubmit(props.login,)}/> 
            </View>   
            <View style={{marginBottom:20}}>
                <Text>Si quiere ser parte del staf medico presione </Text>
                
            </View>
        </View>
);
};

const styles = StyleSheet.create({
    TextInput:{
    marginBottom : 16
    },
    Linea:{
    height : 2,
    backgroundColor : "#DCDCDC",
    },
    errorValidate:{
    color : "#FC0000",
    fontSize : 10
    }
    })
    

export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);