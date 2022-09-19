import React from "react";
import { cartData } from "../Redux/reducer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, EmptyCart, RemoveToCart } from "../Redux/actions";
function Cart() {
  const CartData = useSelector((state) => state.cartData);
  console.log(CartData);
  const Amount =
    CartData.length &&
    CartData.map((item) => item.price).reduce(
      (prev, currVal) => prev + currVal
    );
  console.log(Amount);
  const Discount = Amount / 10;
  const TotalAmount = Amount - Discount;

  const dispatch = useDispatch();

  return (
    <>
      <Container
        className="CartContainer"
        sx={{ width: "75%" }}
        style={{ display: "flex" }}
      >
        <Box
          style={{
            flex: "2",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Brand Name</th>
                <th>Color</th>
                <th>Category</th>
                <th>Price</th>
                <th>REmove From Cart</th>
              </tr>
            </thead>
            <tbody>
              {CartData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.color}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => dispatch(RemoveToCart(item.id))}>
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
        <Box style={{ flex: "1", margin: "auto" }}>
          <div className="mainDiv">
            <div className="totalAmount">
              <span>
                <b>Amount : </b>
              </span>
              <span>{Amount}</span>
            </div>
            <div className="discount">
              <span>
                <b>Discounts 10% :</b>
              </span>
              <span>{Discount}</span>
            </div>
            <div className="TotalAmount">
              <span>
                <b>Total Amount :</b>
              </span>
              <span>{TotalAmount}</span>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}
export default Cart;
