

import { PRODUCT_LIST , SET_PRODUCT_LIST} from './constants'

export  const  productList = (data=[], action)=>{

    switch(action.type){
        case SET_PRODUCT_LIST:
            console.log(' set product list',action)
        return [...action.data];
        default:
        return data;
    }

}
