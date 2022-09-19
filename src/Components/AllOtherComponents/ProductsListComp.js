import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../Redux/ProdListReducer";
import { prodList } from "../Redux/ProdListAction";
import { AddToCart, EmptyCart, RemoveToCart } from "../Redux/actions";

function ProdList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  console.log("comp card", data);

  useEffect(() => {
    dispatch(prodList());
  }, []);

  return (
    <>
      {data.map((items, index) => {
        return (
          <>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia 
                component="img"
                height="140"
                image={items.photo}
                key={items.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.name}
                </Typography>
                <Typography variant="body" color="text.secondary">
                 <b>Category : </b>{items.category}
                </Typography><br/>
                <Typography variant="body" color="text.secondary">
                 <b>Color : </b>{items.color}
                </Typography><br/>
                <Typography variant="body" color="text.secondary">
                 <b>Brand : </b>{items.brand}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => dispatch(AddToCart(items))}>Add To Cart</Button>
                <Button size="small" variant="outlined" onClick={()=> dispatch(RemoveToCart(items.id))}> Remove To Cart</Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
}
export default ProdList;
