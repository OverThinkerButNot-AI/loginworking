import mongoose from "mongoose";
export const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mangodb connected"))
    .catch((err) => console.error("MangoDB connection error", err));
};
