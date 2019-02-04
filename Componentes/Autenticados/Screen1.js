import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet,Dimensions, Button, TouchableHighlight} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {baseDeDatos} from '../../Store/Servicios/FireBase';
import {autenticacion} from '../../Store/Servicios/FireBase';
import { actionChannel } from 'redux-saga/effects';




class Buscar extends React.Component{
constructor(props) { 
    super(props);
this.state = {
focusedLocation: {
latitude: -33.4372,
longitude: -70.6506,
latitudeDelta: 0.0122,
longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
},
estadoMedico:'Inactivo',
};
}

componentDidMount() {
this.watchId = navigator.geolocation.watchPosition(
(position) => {
this.setState({
regiones: {
latitude: position.coords.latitude,
longitude: position.coords.longitude,
latitudeDelta: 0.0122,
longitudeDelta: Dimensions.get("window").width /
Dimensions.get("window").height * 0.0122
},
markers:{
latitude: position.coords.latitude,
longitude: position.coords.longitude,
}
});
},
(error) => this.setState({ error: error.message }),
{ enableHighAccuracy: true, timeout: 20000, maximumAge: 0, distanceFilter: 1 },


);

    /*var aut = autenticacion;
    aut.onAuthStateChanged(function(usuario){
        if(usuario){
            usuario=usuario.toJSON();
            correoMedico = usuario['email'];
            baseDeDatos.ref('Medicos').on('value', (data)=> {
                var medicos = data.val();
                var keys = Object.keys(medicos);
                data = data.toJSON();
                for(var i=0; i< keys.length; i++){
                    if(data[keys[i]]['email'] == correoMedico){
                        baseDeDatos.ref().child('/Medicos/'+ data[keys[i]]['IdConsultar']).update({estado:'Inactivo'})
                    }
                }

            })
        }
    });*/


}



componentWillUnmount() {
navigator.geolocation.clearWatch(this.watchId);
}



funcionConectar(){
    var aut = autenticacion;
    if(this.state.estadoMedico == 'Inactivo'){
        est='Activo';
    }else{
        est ='Inactivo';    
    }
    aut.onAuthStateChanged(function(usuario){
        if(usuario){
            usuario=usuario.toJSON();
            correoMedico = usuario['email'];
            baseDeDatos.ref('Medicos').on('value', (data)=> {
                var medicos = data.val();
                var keys = Object.keys(medicos);
                data = data.toJSON();
                for(var i=0; i< keys.length; i++){
                    if(data[keys[i]]['email'] == correoMedico){
                        baseDeDatos.ref().child('/Medicos/'+ data[keys[i]]['IdConsultar']).update({estado:est})
                        
                    }
                }

            })
        }
    }
    
    );

    this.setState({estadoMedico:est})
}


render() {
if (this.state.markers) {
marker = <Marker coordinate={this.state.markers} />;
lugar = this.state.regiones;
}else{
marker = <Marker coordinate={{latitude: -33.4372,longitude:-70.6506}} />;
lugar = this.state.focusedLocation;
}





return (
console.log(this.state.markers),
        <View style={styles.container}>
            
        <MapView style={styles.map} initialRegion={lugar} region={lugar}>{marker}
        </MapView>
            <View>
                <Button style={styles.touchable} title='CONECTAR' onPress = {() => { 
                    this.funcionConectar();
                    
                    }}>
                </Button>
            </View>
        </View>
        );
}
}

const styles= StyleSheet.create({
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
    map:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    },
    especialidad:{
        flex:1,
        position: 'absolute',
        justifyContent: 'flex-start'
    },
    touchable:{
        borderRadius: 80,
    },
    button: {
        position:'absolute',
        backgroundColor: '#3D6DCC',
        borderRadius: 100,
        height: 130,
        width: 130,
        justifyContent: 'center'
    }
})


export default Buscar;