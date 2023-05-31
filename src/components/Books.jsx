import React from "react";

import Book from "./Book";
import { Grid } from "@mui/material";

const Books = (props) => {
  
  return (
    <>
      <Grid
        container
        item
        xs={12}
        spacing={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </Grid>
    </>
  );
};

export default Books;