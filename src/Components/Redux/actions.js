import { ADD_TO_CART, REMOVE_TO_CART , EMPTY_CART } from "./constants";


export const AddToCart = (data)=>{
    // console.log('products',data)
    return {
        type:ADD_TO_CART, 
        data
    }
}

export const RemoveToCart = (data)=>{
    // console.log('remove cart',data)
    // console.log('item id',id)
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyCart = (data)=>{
    console.log('Empty cart');
    return {
        type:EMPTY_CART,
        
    }
}