import React from "react";
import BookItem from "./BookItem";
import { Box, Grid } from "@mui/material";

const BookList = ({ books, featuredPage }) => {
  return (
    <div>
      <Box display={"flex"} justifyContent="center">
        <Grid container padding={3} spacing={2}>
          {books.map((book, index) => (
            <Grid
              item
              height={featuredPage ? "500px" : "350px"}
              width={featuredPage ? "100%" : "80%"}
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
            >
              <BookItem
                author={book.author}
                title={book.title}
                imageUrl={book.imageUrl}
                featured={book.featured}
                id={book._id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default BookList;
