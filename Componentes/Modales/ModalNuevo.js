import React, { Component } from 'react'; 
import { StyleSheet, View, Modal, Text, Button, TouchableHighlight, TextInput } from 'react-native';

class ModalEditPago extends Component {
    render() {    
    return ( 
       <View style={styles.container} >
            <View>
                <View>
                    <Text style={styles.titulo}>Editar Vehiculo</Text>
                    <TextInput 
                    name = "title"
                    style={styles.input}
                    placeholder="Title"
                    value = {props.input.value}
                    onChangeText={props.input.onChange}
                    onBlur = {props.input.onBlur}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Subtitle" 
                    value={this.state.Subtitle}
                    onChangeText={(subTitle) => this.changeSubtitle(subTitle)}
                    />
                    <TextInput 
                    multiline= {true}
                    style={[styles.input, styles.textArea]}
                    placeholder="Comment" 
                    value={this.state.comment}
                    onChangeText={(comment) => this.changeComment(comment)}
                    />
                    <TouchableHighlight
                    style={styles.button}>
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableHighlight>
                </View>
                { this.props.meta.touched && this.props.meta.error && <Text>{ props.meta.error }</Text> }  
            </View>    
       </View>   
   )
 }
}

const validate = (values) => {
    const errors = {};
        if(!values.title){
            errors.title = 'Requerido'
        }

}

export default ModalEditPago(validate);
 
const styles = StyleSheet.create({ 
    container :{    
        flex:1,
        backgroundColor: '#F5FCFF',
        paddingLeft:15,
        paddingRight: 15,
        marginTop: 30
    },
    button:{
        backgroundColor:'skyblue',
        marginTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
        height:40,
    },
    textButton:{
        textAlign: 'center',
        color: 'white'
    },
    titulo:{
        textAlign:'center',
        fontSize: 18
    },
    input:{
        height:40,
        borderColor:'#ccc',
        borderWidth: 2,
        marginBottom: 20
    },
    textArea:{
        height:40,
    }
    
});