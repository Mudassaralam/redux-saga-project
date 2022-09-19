import { PRODUCT_LIST , SEARCH_PRODUCT } from './constants'

export const prodList =   ()=>{
   
    console.log('product list');
    return{
        type:PRODUCT_LIST,
        
    }

}
export const ProductSearch = (query)=>{
    console.log('query',query)
    return{
        type:SEARCH_PRODUCT,
        query,
    }
}