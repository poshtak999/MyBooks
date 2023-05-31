import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


import { NavLink } from "react-router-dom";

const Book = (props) => {
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
          Наука и Вера
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Жанр: Исторична
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Автор: К.Джон Коллинз
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата початку читання: 10.03.2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата останього читання: 15.04.2023
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to="/info">
            <Button variant="contained" size="small">Інфо</Button>
          </NavLink>
          <NavLink to="/edit">
            <Button variant="contained" size="small">Редагувати</Button>
          </NavLink>
        </CardActions>
      </Card>

      
    </div>
  );
};

export default Book;
