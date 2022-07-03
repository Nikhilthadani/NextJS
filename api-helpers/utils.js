import mongoose from "mongoose";

export const connectToDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:Q534mfuM6LxbDyQ0@cluster0.asux7.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
