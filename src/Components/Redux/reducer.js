import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log('action add to cart',action)
      return [action.data, ...data];
    case REMOVE_TO_CART:
      const remainItem = data.filter((item)=> item.id !== action.data);
      // console.log('remain item',remainItem)

      return  [...remainItem]
    case EMPTY_CART:
        data=[]
      return [...data];

    default:
      return data;
  }
};
