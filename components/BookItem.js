import React from "react";
import {
  Button,
  CardContent,
  Typography,
  Card,
  CardActions,
} from "@mui/material";
import Link from "next/link";
const BookItem = ({ title, author, imageUrl, id, featured }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 3,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "50%" }}>
        {featured && (
          <div
            style={{
              position: "absolute",
              top: "0",
              border: "1px solid #red",
              background: "red",
              color: "white",
              fontWeight: "500",
            }}
          >
            Featured
          </div>
        )}{" "}
        <img
          loading="lazy"
          height="100%"
          width="100%"
          src={imageUrl}
          alt={title}
        />
      </div>
      <CardContent sx={{ width: "100%", height: "30%" }}>
        <Typography
          height={"50px"}
          fontFamily={"Ubuntu,sans-serif"}
          variant="h6"
          fontSize={{ lg: "18px", md: "16px", xs: "14px", sm: "13px" }}
          component="div"
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Ubuntu,sans-serif"}
          variant="body2"
          color="text.secondary"
        >
          Author: {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/books/${id}`}>
          <Button size="small" color="primary">
            Edit
          </Button>
        </Link>

        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
