import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';


const reducerPrueba = ( state =[0], action ) => {
switch(action.type){
case 'AUMENTAR_REDUCER_PRUEBA':
return [...state, 1];
default:
return state;
}
};


const sagaMiddleware = createSagaMiddleware();

const reducerSesion = (state= null, action) => {
switch (action.type) {
case 'ESTABLECERSESSION':
return action.datos;
case 'CERRARSESSION':
return null;
default:
return state;
}
}

const reducers = combineReducers ({
reducerPrueba,
form,
reducerSesion
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;