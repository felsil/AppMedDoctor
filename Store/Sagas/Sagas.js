import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/FireBase';


const registroEnFirebase = values =>
autenticacion.createUserWithEmailAndPassword(values.correo,
values.password).then( success => success );
const registroEnBaseDeDatos = ({ uid, nombre, email }) =>
baseDeDatos.ref('usuarios/'+ uid ).set({ nombre: nombre, email: email
});

const loginEnFirebase = ({correo , password}) =>
autenticacion.signInWithEmailAndPassword(correo, password)
.then( (success) => success )

function* sagaRegistro(values){
try{
console.log(values);
const registro = yield call(registroEnFirebase, values.datos )
//console.log(registro);
const { user : {email, uid} }= registro;
const { datos:{ nombre } } = values;
yield call(registroEnBaseDeDatos, { uid, email, nombre });
} catch (error) {
console.log(error);
}
}

function* sagaLogin(values){
try{
console.log(values);
const resultadoLogin = yield call(loginEnFirebase, values.datos);
console.log(resultadoLogin);
}catch(error){
console.log(error);
}
}



export default function* funcionPrimaria(){
yield takeEvery ( 'REGISTRO', sagaRegistro ) ;
yield takeEvery ( 'LOGIN', sagaLogin );
}