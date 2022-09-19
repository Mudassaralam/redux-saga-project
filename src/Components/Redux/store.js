import { legacy_createStore as createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootreducer from './combineReducer';
import prodSaga from "./prodSaga";
import  createSagaMiddleware  from "redux-saga";




// const store = createStore(rootreducer)
// export default store;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootreducer,
    middleware:()=> [sagaMiddleware]
})

sagaMiddleware.run(prodSaga)
// console.log(sagaMiddleware.run(prodSaga))
export default store;