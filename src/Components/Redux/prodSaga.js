// " \]
import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST , SEARCH_PRODUCT} from "./constants";
import { takeEvery , put } from 'redux-saga/effects'

function* getProducst(){

     let data = yield fetch('http://localhost:3000/products');
    data = yield data.json();
    // yield call(abc(data))
    // console.log('prod data called',data);
    yield put({type:SET_PRODUCT_LIST, data:data})
}

function* searchProducts(data){
    let result  = yield fetch(`http://localhost:3000/products?q=${data.query}`);
    result  = yield result.json()
    // console.log('search ', data)
    yield put({type:SET_PRODUCT_LIST,data:result})
}

function* prodSaga(){
    yield takeEvery(PRODUCT_LIST,getProducst);
    yield takeEvery(SEARCH_PRODUCT , searchProducts)
   

}
export default prodSaga;