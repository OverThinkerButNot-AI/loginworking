const express = require("express");
const productRouter = require("../routes/product.route");

const app = express();
const port = 8080;
app.use(bodyParser.json);
dbConnect();

// The first "/" is important here
app.use("/api", productRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
