import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


import { NavLink } from "react-router-dom";

const Book = ({data}) => {
  const { name, genre, author, dateStart, dateEnd } = data;
  return (
    <div>
      <Card sx={{ maxWidth: 300, m: 5 }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://img.freepik.com/premium-vector/blank-book-cover_134452-8.jpg"
          title="books"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Жанр: {genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Автор: {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата початку читання: {dateStart}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата останього читання: {dateEnd}
          </Typography>
        </CardContent>
        <CardActions style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
          <NavLink to="/info">
            <Button variant="contained" size="small">Інфо</Button>
          </NavLink>
        </CardActions>
      </Card>

      
    </div>
  );
};

export default Book;