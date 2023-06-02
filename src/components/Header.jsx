import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavLink to="/" style={{ textDecoration: 0, padding: '20px'}}>
            <Typography variant="h6" color="inherit" component={'div'}>
              MyBook
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
