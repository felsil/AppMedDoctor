import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/FireBase';
import RutasAutenticadas from './Componentes/Autenticados/RutasAutenticadas';
import NoAutenticados from './Componentes/NoAutenticados/RutasNoAutenticados';

class Seleccion extends Component{
    componentDidMount(){
        this.props.autenticaciones();
    }
    render(){
        return(
            <View style={{flex:1}}>
                {this.props.usuario? <RutasAutenticadas /> : <NoAutenticados /> }
            </View>
        )
    }
}

const mapStateToProps = state => ({
usuario: state.reducerSesion,
})

const mapDispatchToProps = dispatch => ({
autenticaciones: () => {
autenticacion.onAuthStateChanged(function(usuarios) {
if (usuarios) {
//console.log(usuarios.toJSON())
dispatch({ type: 'ESTABLECERSESSION', datos: usuarios });
} else {
dispatch({ type: 'CERRARSESSION' });
}
});
}
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);