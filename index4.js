//understanding express.static
import express from "express";
const app = express();

app.use("/images", express.static("images")); //localhost:8080/images

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
