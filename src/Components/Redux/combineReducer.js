import {  combineReducers} from 'redux'
import { cartData } from './reducer';
import { productList } from './ProdListReducer'


export default combineReducers({
    cartData,
    productList
})