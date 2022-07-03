import { getBookFromId } from "../../api-helpers/frontend/helpers";
import BookDetail from "../../components/BookDetail";

export default function BookDetailPage({ book }) {
  console.log(book);
  return <BookDetail book={book} />;
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  console.log(id);
  const book = await getBookFromId(id);
  console.log(book);
  return {
    props: {
      book,
    },
  };
};
