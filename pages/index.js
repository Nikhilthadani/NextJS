import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getFeaturedBooks } from "../api-helpers/frontend/helpers";
import BookList from "../components/BookList";

export default function Home({ books }) {
  return (
    <div>
      <Box
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
        sx={{ bgcolor: "#3d2870" }}
        justifyContent="center"
      >
        <Typography
          color="white"
          fontFamily={"Ubuntu"}
          textAlign={"center"}
          variant="h2"
        >
          Featured Section
        </Typography>
      </Box>
      <BookList books={books} featuredPage />
    </div>
  );
}
export const getStaticProps = async () => {
  const books = await getFeaturedBooks();
  return {
    props: {
      books,
    },
  };
};
