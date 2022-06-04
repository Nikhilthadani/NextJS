export const books = [
  {
    id: "1",
    name: "Mindset",
    description: "This is my First Boook",
  },
  {
    id: "2",
    name: "The Secret",
    description: "This is my First Boook",
  },
  {
    id: "3",
    name: "The Money",
    description: "This is my First Boook",
  },
  {
    id: "4",
    name: "Atomic Habits",
    description: "This is my First Boook",
  },
  {
    id: "5",
    name: "Rich Dad Poor Dad",
    description: "This is my First Boook",
  },
];

export const fetchBookFromID = (id) => {
  const fetchedBook = books.find((book) => book.id === id);
  return fetchedBook;
};
