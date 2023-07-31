import React from "react";

import Book from "./Book";
import { Grid } from "@mui/material";
import bookDate from "../data/booksDate";

const Books = (props) => {
  const book = bookDate.map((book) => {
    return <Book key={book.id} data={book} id={book.id} />;
  });
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
        {book}
      </Grid>
    </>
  );
};

export default Books;
