import React from 'react';
import {createDrawerNavigator, createStackNavigator, DrawerItems} from "react-navigation";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, Alert as RNAlert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalRecibirConsulta from '../Modales/ModalRecibirConsulta';
import Button from '../Modales/Button';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import MiPerfil from './MiPerfil';
import EditPago from '../Modales/ModalEditPago';



const logoApp = (props) =>(
    <View style= {{ height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source= {require('../Imagen/LogoMedApp.png')} style= {{ height: 50, width: 100, bordeRadius: 40}}/>
    </View>
)

const headerIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;

const navigationOptions = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#3D6DCC",
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    },
};

const mapaScreenStack = createStackNavigator(
    {
        'MAPA': {
            screen: Screen1,
            navigationOptions: ({navigation}) => ({
                title: 'Mapa',
                headerLeft: headerIcon(navigation, 'bars'),
                headerRight: logoApp()
            
            })
        }
    },
    navigationOptions
);

const perfilScreenStack = createStackNavigator(
    {
        'PERFIL': {
            screen: MiPerfil,
            navigationOptions: ({navigation}) => ({
                title: 'Mi Perfil',
                headerLeft: headerIcon(navigation, 'bars'),
                headerRight: logoApp()
            
            })
        }
    },
    navigationOptions
);

const misGananciasScreenStack = createStackNavigator(
    {
        'MIS GANANCIAS': {
            screen: EditPago,
            navigationOptions: ({ navigation }) => ({
                title: 'Mis Ganancias',
                headerLeft: headerIcon(navigation, 'bars'),
                headerRight: logoApp()
            })
        }
    },
    navigationOptions
);

const cerrarSesionStack = createStackNavigator(
    {
        'CERRAR SESION': {
            screen: ModalRecibirConsulta,
            navigationOptions: ({ navigation }) => ({
                title: 'Cerrar Sesion',
                headerLeft: headerIcon(navigation, 'bars'),
                headerRight: logoApp()
            })
        }
    },
    navigationOptions
);







export default createDrawerNavigator(
    {
        
        Mapa: {
            screen: mapaScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'HOME',
                drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color: tintColor}} />),
            })
        },
        Perfil: {
            screen: perfilScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'MI PERFIL',
                drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color: tintColor}} />),
            })
        },
        MisGanancias: {
            screen: misGananciasScreenStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'MIS GANANCIAS',
                drawerIcon: ({tintColor}) => (<Icon name="user" size={30} style={{color: tintColor}} />),
            })
        },
        CerrarSesion: {
            screen: cerrarSesionStack,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'CERRAR SESION',
                drawerIcon: ({tintColor}) => (<Icon name="user-add" size={30} style={{color: tintColor}} />),
            })
        },
        
    },
    {
        initialRouteName: 'Mapa',
    }
)
