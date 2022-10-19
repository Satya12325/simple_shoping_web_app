import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from '@mui/icons-material/Adb';
import EditIcon from "@mui/icons-material/Edit";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams, useNavigate, } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { cartapi } from '../../Redux/Shopping_cart/cart.api';
import {logoutApi} from "../../Redux/Auth/loginApi"
import { LoginModal } from "../Login/Login";

function NavigationBar(props) {
  const history = useNavigate();
  const dispatch = useDispatch();
 const  handleClick = () => {
  history("/cart")
 }
 const {isLogin} = useSelector((state)=>state.auth)
 const {isLoading,isError,cart} = useSelector((state)=>state.shoppingCart)
 useEffect(() =>{
  dispatch(cartapi())
 },[])
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
           
            <Typography
            onClick={()=> history("/")}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Shopyfi
            </Typography>
           
           
              

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleClick}>
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {
                isLogin ? (<Button sx={{ color: "#fff" }}
                onClick={()=>{dispatch(logoutApi())}}
                >
                Log out
              </Button>):(
                <Button sx={{ color: "#fff" }}>
                <LoginModal
                name ={"Login"}/>
              </Button>
              )
              }
                
              
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavigationBar;
