import { fetchBookFromID } from "../../data/utils";
import { useRouter } from "next/router";
import React from "react";
function BookDetail() {
  const { query } = useRouter();
  const bookId = query.id;
  const book = fetchBookFromID(bookId);
  console.log(book);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        width: 300,
        background: "whitesmoke",
        margin: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{book.name}</h1>
      <p>{book.description}</p>
    </div>
  );
}
export default BookDetail;
