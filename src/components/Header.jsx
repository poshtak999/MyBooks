import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

//dialog
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
/////////////////////////////////////////////////////////////

const Header = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
            <Button color="inherit" onClick={handleOpen}>
              Open modal
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить книгу
          </Typography>
          <Box display={"flex"} flexDirection={"column"} margin={"10px"}>
            <TextField
              id="filled-basic"
              label="Назва"
              variant="filled"
              style={{ margin: "5px" }}
            />
            <TextField
              id="filled-basic"
              label="Жанр"
              variant="filled"
              style={{ margin: "5px" }}
            />
            <TextField
              id="filled-basic"
              label="Автор"
              variant="filled"
              style={{ margin: "5px" }}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button>Добавить</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
