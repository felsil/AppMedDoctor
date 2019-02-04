import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import ModalEditPago from '../Modales/ModalEditPago';
import ModalEditVehiculo from '../Modales/ModalVehiculo';
import Modal from 'react-native-modal';




class MiPerfil extends Component {
  constructor(props) { 
    super(props); 
    this.state = { ModalVisible: false, ModalVehVisible: false,}; 
  } 
  showModal() {
    this.setState(prevState => {
      return {
        ModalVisible: true
      }
    });
  }

  showModalVeh() {
    this.setState(prevState => {
      return {
        ModalVehVisible: true
      }
    });
  }

  getResponse = (result) => {
    this.setState({ModalVisible : result})
  }

  getResponseVeh = (resultVeh) => {
    this.setState({ModalVehVisible : resultVeh})
  }
  render() {
    return (
      <View>

      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Nombre del Doctor</Text>
              <Text style={styles.description}>Telefono del Doctor</Text>     
              <Text style={styles.description}>Especialidad del Doctor</Text> 
              <Text style={styles.description}>Pago      <Text style={styles.editar} onPress={()=>{this.showModal()} }>Editar</Text></Text>
              <Text style={styles.description}>Mi Vehiculo     <Text style={styles.editar} onPress={()=>{this.showModalVeh()} }>Editar</Text></Text>
            </View>                 
        </View>        
      </View>
      <ModalEditPago callback={this.getResponse.bind(this)}   ModalVisible = { this.state.ModalVisible }/>
      <ModalEditVehiculo callback={this.getResponseVeh.bind(this)}   ModalVehVisible = { this.state.ModalVehVisible }/>
    </View>
    );
  }
}

export default MiPerfil;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop: 80
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
    editar:{
    fontSize:12,
    color: "#3D6DCC",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:50,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  ButtonStyle: {
    marginBottom: 20,
    fontSize:28,
    color: "#696969",

  },MainContainer :{    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInsideView:{ 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor : "#FFFFFF", 
    height: 400 ,
    width: '90%',
    borderRadius:10,
    borderWidth: 3,
    borderColor: '#CBCECC' 
}, 
  TextStyle:{ 
    fontSize: 20, 
    color: "#000000",
    textAlign: 'center',
    marginVertical: 1,
    borderWidth: 1,
    borderColor: '#fff' 
},
  Textos:{
    height: 40, 
    borderBottomColor: 'gray', 
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 20, 
    marginBottom: 10, 
    borderBottomWidth: 1
},
  ViewTextos:{
    flex: 0.25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 5
},
  PosisionH:{
    flexDirection: 'row',  
    borderWidth: 1,
    borderColor: '#fff',
},
  PosisionBotonGuardar:{
    marginHorizontal: 20,
    marginVertical: 10
},
  PosisionBotonVolver:{
    marginHorizontal: 20,
    marginVertical: 10
}

});