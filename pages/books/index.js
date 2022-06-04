import { books } from "../../data/utils";
import React from "react";
import Link from "next/link";
function BookHome() {
  return (
    <div>
      {books.map((book, index) => (
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
          key={index}
        >
          <h1>{book.name}</h1>
          <p>{book.description}</p>
          <article
            style={{
              border: "1px solid black",
              padding: 12,
              background: "#ccc",
            }}
          >
            <Link href={`/books/${book.id}`}>Detail</Link>
          </article>
        </div>
      ))}
    </div>
  );
}
export default BookHome;
