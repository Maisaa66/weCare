//Server set app
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"));
app.listen(PORT, () => console.log("localhost:" + PORT));

module.exports = app;
