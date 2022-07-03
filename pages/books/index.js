import { getAllBooks } from "../../api-helpers/frontend/helpers";
import BookList from "../../components/BookList";

function BookHome({ books }) {
  return (
    <div>
      <BookList books={books} />{" "}
    </div>
  );
}
export default BookHome;

export const getStaticProps = async () => {
  const books = await getAllBooks();
  return { props: { books } };
};
