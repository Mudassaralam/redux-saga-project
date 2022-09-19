import { Box, Toolbar } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ProductSearch } from '../Redux/ProdListAction'
import { useDispatch } from 'react-redux'
function Header() {
  const StyledBadge = styled(BadgeUnstyled)`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    list-style: none;
    font-family: IBM Plex Sans, sans-serif;
    position: relative;
    display: inline-block;
    line-height: 1;

    & .${badgeUnstyledClasses.badge} {
      z-index: auto;
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      color: #fff;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      text-align: center;
      background: #07f;
      border-radius: 10px;
      box-shadow: 0 0 0 1px #fff;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }

    & .${badgeUnstyledClasses.invisible} {
      display: none;
    }
  `;

  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
   
  console.log(result);
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <input
                placeholder="Search Here"
                style={{
                  backgroundColor: "white",
                  borderRadius: "3px",
                  padding: "10px",
                  border: "none",
                  outline: "none",
                }}
                onChange={(e)=>dispatch(ProductSearch(e.target.value))}
              />
            </Box>

            <StyledBadge badgeContent={result.length ? result.length : "0"}>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <ShoppingCartIcon />
              </Link>
            </StyledBadge>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Header;
