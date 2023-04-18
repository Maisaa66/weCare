//Server set app
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoutes = require("./Routes/users.routes");
const providersRoutes = require("./Routes/serviceProviders.routes");
const cookieParser = require("cookie-parser");
const { addTimeOfRequest } = require("./Middlewares/helpers.middleware");

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

// Middleware to parse data-body from request
app.use(express.json());
// Middleware to parse cookie from request
app.use(cookieParser());
app.use(addTimeOfRequest);
//Routes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/providers", providersRoutes);

app.listen(PORT, () => console.log("http://localhost:" + PORT));

module.exports = app;
