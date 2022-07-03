import axios from "axios";

export const getFeaturedBooks = async () => {
  const res = await axios.get("http://localhost:3000/api/books/");
  if (!res.status === 200) {
    return new Error("Unable to Fetch Data");
  }
  const data = await res.data;
  const featuredBooks = data?.books?.filter((book) => book.featured === true);
  return featuredBooks;
};

export const getAllBooks = async () => {
  const res = await axios.get("http://localhost:3000/api/books/");
  if (!res.status === 200) {
    return new Error("Unable to Fetch Data");
  }
  const data = await res.data;
  return data?.books;
};

export const getBookFromId = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/book/${id}/`);
  if (!res.status === 200) {
    return new Error(res.data.message);
  }
  const data = await res.data;
  return data?.book;
};
