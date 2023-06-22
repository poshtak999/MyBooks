import React, { useState } from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Header = (props) => {
  const [open,setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavLink to="/" style={{ textDecoration: 0, padding: '20px'}}>
            <Typography variant="h6" color="inherit" component={'div'}>
              MyBook
            </Typography>
          </NavLink>
          <div style={{flexGrow: 1}}></div>
          <Button color="inherit" onClick={handleOpen}>Open modal</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
