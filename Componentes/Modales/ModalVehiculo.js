import React, { Component } from 'react'; 
import { StyleSheet, View, Modal, Text, Button, Platform, TextInput } from 'react-native';

class ModalEditVehiculo extends Component {
    constructor(props) { 
        super(props); 
        this.state = { ModalVehVisible: false }; 
      } 
      closeModalVeh(){
        this.props.callback(!this.props.ModalVehVisible);
    }     

 render() {
    
   return ( 
      <View style={styles.MainContainer}> 
        <Modal transparent={true} animationType={"slide"} visible={this.props.ModalVehVisible}> 
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}> 
                <View style={styles.ModalInsideView}> 
                    {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */} 
                                  
                        <Text style={styles.TextStyle}>Editar Vehiculo</Text>
                                                   
                            <View style={styles.ViewTextos}>
                                <TextInput style={styles.Textos} placeholder="Marca"/>
                            </View>
                            <View style={styles.ViewTextos}>
                                <TextInput style={styles.Textos} placeholder="Modelo"/>
                            </View>
                            <View style={styles.ViewTextos}>
                                <TextInput style={styles.Textos} placeholder="Color"/>
                            </View>
                            <View style={styles.ViewTextos}>
                                <TextInput style={styles.Textos} placeholder="Patente"/>
                            </View>                                                 
                            <View style={styles.PosisionH}>
                                <View style={styles.PosisionBotonGuardar}>
                                    <Button title ="Guardar" onPress={()=>this.closeModalVeh()}/> 
                                </View>
                                <View style={styles.PosisionBotonVolver}>                                
                                    <Button title ="Volver" onPress={()=>this.closeModalVeh()}/>
                                </View>
                            </View> 
                    {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
                </View> 
            </View> 
        </Modal> 
      </View>          
   );
 }
}

export default ModalEditVehiculo;
 
const styles = StyleSheet.create({ 
    MainContainer :{    
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