import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";

import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";

import { Button } from "@mui/material";

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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <Typography variant="h5" display={"flex"} justifyContent={"center"}>
              Додати книгу
            </Typography>
            <TextField id="standard-basic" label="name" variant="standard" />
            <TextField id="standard-basic" label="genre" variant="standard" />
            <TextField id="standard-basic" label="author" variant="standard" />
            <Button style={{ margin: "10px" }}>Додати</Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Header;
