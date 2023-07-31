import React from 'react'

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

export default function BookModal({ open, handleClose }) {

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

      

  return (
    <div>
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
    </div>
  )
};
