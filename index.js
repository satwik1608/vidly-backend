const genres = require("./routes/genres");
const customers = require("./routes/customers");
const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/vidly")
  .then(console.log("Connecting to MongoDB..."))
  .catch((err) => console.error("Some random error..."));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
