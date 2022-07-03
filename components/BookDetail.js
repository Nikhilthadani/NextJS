import { Box } from "@mui/system";
import Form from "./Form";

const BookDetail = ({ book }) => {
  const data = {
    title: book.title,
    author: book.author,
    imageUrl: book.imageUrl,
    featured: book.featured,
  };
  const submitHandler = (data) => {
    console.log(data);
    // send req
  };

  return (
    <div>
      <Box
        margin={"auto"}
        borderRadius={5}
        marginTop={"50px"}
        display={"flex"}
        flexDirection="column"
        width={"50%"}
        border="1px solid #ccc"
        justifyContent={"center"}
        alignItems="center"
        boxShadow={"5px 5px 10px #ccc"}
      >
        <Form data={data} onSubmit={submitHandler} />
      </Box>
    </div>
  );
};

export default BookDetail;
