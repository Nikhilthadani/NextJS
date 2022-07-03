import {
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
const labelSx = { marginTop: "10px" };
const Form = ({ data, onSubmit }) => {
  const [inputs, setInputs] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          imageUrl: data.imageUrl,
          featured: data.featured,
        }
      : {
          title: "",
          author: "",
          imageUrl: "",
          featured: "",
        }
  );

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "80%", height: "100%" }}>
      <Typography
        color="#cc5333"
        fontWeight={"bold"}
        variant="h5"
        mt={1}
        padding={2}
        textAlign={"center"}
      >
        Add New Book{" "}
      </Typography>
      <Box
        padding={3}
        display={"flex"}
        flexDirection="column"
        width={"100%"}
        justifyContent="center"
      >
        <FormLabel sx={labelSx}>Title</FormLabel>
        <TextField
          margin="normal"
          name={"title"}
          value={inputs.title}
          onChange={handleChange}
          variant="outlined"
          placeholder="Title"
        />
        <FormLabel sx={labelSx}>Author</FormLabel>
        <TextField
          margin="normal"
          name={"author"}
          value={inputs.author}
          onChange={handleChange}
          variant="outlined"
          placeholder="Author"
        />
        <FormLabel sx={labelSx}>ImageURL</FormLabel>
        <TextField
          margin="normal"
          name={"imageUrl"}
          value={inputs.imageUrl}
          onChange={handleChange}
          variant="outlined"
          placeholder="Image URL"
        />
        <Box>
          {" "}
          <Checkbox
            sx={{ marginRight: "auto" }}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, featured: e.target.checked }))
            }
            checked={inputs.featured}
            title="Featured"
            name="featured"
          />{" "}
          <FormLabel sx={labelSx}>Featured</FormLabel>
        </Box>

        <Button
          sx={{
            mt: 1,
            background: "#cc5333",
            width: "100px",
            margin: "auto",
            borderRadius: "10px",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
