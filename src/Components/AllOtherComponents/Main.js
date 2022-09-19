import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { AddToCart, EmptyCart, RemoveToCart } from "../Redux/actions";

import { Box, Toolbar, Button, Typography } from "@mui/material";
import { prodList } from "../Redux/ProdListAction";
import ProductsListComp from './ProductsListComp'
import { productList } from '../Redux/ProdListReducer'
function Main() {

  const dispatch = useDispatch();

  // const data = useSelector((state)=>state.productList);

  // console.log('data in main component by saga',data)




  return (
    <>
      <div style={{ marginTop: "80px" }} className="App">
        {/* <Button variant="contained" onClick={() => dispatch(AddToCart(products))}>Add to cart</Button><br/><br/> */}
        {/* <Button variant="contained" onClick={() => dispatch(RemoveToCart(products))}>Remove to cart</Button><br/><br/> */}
        <Button variant="contained" onClick={() => dispatch(EmptyCart())}> Empty cart</Button><br/><br/>
        {/* <Button variant="contained" onClick={() => dispatch(prodList())}> Product List</Button><br/><br/> */}
        <h1>All Products</h1> 
        <div className="ProductListss">
        
        <ProductsListComp /> 
         

        </div>

        
      </div>
    </>
  );
}
export default Main;
