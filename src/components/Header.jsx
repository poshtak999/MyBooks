import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";

import BookModal from "./BookModal";


const Header = (props) => {

  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <NavLink to="/" style={{ textDecoration: 0, padding: "20px" }}>
              <Typography variant="h6" color="inherit" component={"div"}>
                MyBook
              </Typography>
            </NavLink>
            <div style={{ flexGrow: 1 }}></div>
            <Button onClick={handleOpen} label="Нажми меня" variant="inherit">
              Додати книгу
            </Button>
          </Toolbar>
        </AppBar>

      </Box>
      
      <BookModal open={open} handleClose={handleClose} />
      
    </>
  );
};

export default Header;
