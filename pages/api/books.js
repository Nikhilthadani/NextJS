import {
  addBook,
  getAllBooks,
} from "../../api-helpers/controllers/books-controller";
import { connectToDatabase } from "../../api-helpers/utils";
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    return getAllBooks(req, res);
  } else if (req.method === "POST") {
    return addBook(req, res);
  }
}
