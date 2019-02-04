import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './Formas/SignInForm';

class SignIn extends Component {
    logeoUsuarios = (values) => {
        //console.log(values);
        this.props.login(values);
        }    
    render(){    
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>    
            <View style={{ marginTop : -100, marginBottom:40 }}>
                <TouchableOpacity style={styles.contenedor}>
                    <Image style={ styles.image }source={require('../../Imagenes/logo.jpg')}/>
                </TouchableOpacity>
            </View>
            <View>
                <SignInForm login = {this.logeoUsuarios} />
            </View>       
        </View>
        );
    }
}

var styles = StyleSheet.create({
contenedor :{
borderWidth:1,
borderColor:'rgba(0,0,0,0.2)',
alignItems:'center',
justifyContent:'center',
width:150,
height:150,
backgroundColor:'#fff',
borderRadius:150,
},
image:{
width: 100,
height : 100,
resizeMode:"contain"
}
})

mapStateToProps = state => ({
prop: state.prop,
});

mapDispatchToProps = dispatch => ({
login : (datos) => {
dispatch({ type : 'LOGIN', datos });
},
})

export default connect( mapStateToProps, mapDispatchToProps )(SignIn);


