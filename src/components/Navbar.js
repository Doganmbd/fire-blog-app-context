import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import homeIcon from "../assests/homeIcon.png";

import {useAuthContext} from "../context/AuthContext";
import {useState}  from "react";
import { logOut } from "../utils/firebase";


import "./style.css";

export default function Navbar() {

  const {currentUser} = useAuthContext();






  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


 

  return (
    <Box sx={{ flexGrow: 1 }} >
      
      <AppBar  position="static"  >
        <Toolbar  className="navbar" >
        <RouterLink to={"/"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
        <img src={homeIcon} alt="homeIcon"  style = {{width:"35px"}}/>
        
          </IconButton>
          </RouterLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            <h2>
             <span style={{justifyContent:"center"}} >{"< < < < ──── Mbd Blog ──── > > > > "}</span>
             </h2>
          </Typography>
         
            <div>
            
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                
                <h5>{currentUser?.displayName}</h5>
                <AccountCircle style={{fontSize:"30px"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                  <div>
                    <RouterLink to={"/profile"}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </RouterLink>
                    <RouterLink to={"/newblog"} className="link">
              <MenuItem onClick={handleClose}>New Blog</MenuItem>
            </RouterLink>
                  </div>

                ) :
                (

            <div>
             <Link component={RouterLink} to={"/login"}>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
            
            <RouterLink  to={"/register"}>
            <MenuItem onClick={handleClose}>Register</MenuItem>
            </RouterLink>
            </div>
         
         )}
         </Menu>
       </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
