//Server set app
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoutes = require("./Routes/users.routes");
const providersRoutes = require("./Routes/serviceProviders.routes");
const requestsRoutes = require("./Routes/requests.routes");
const reviewsRoutes = require("./Routes/reviews.routes");
const cookieParser = require("cookie-parser");
const { addTimeOfRequest } = require("./Middlewares/helpers.middleware");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
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
app.use("/api/v1/requests", requestsRoutes);
app.use("/api/v1/reviews", reviewsRoutes);

app.listen(PORT, () => console.log("http://localhost:" + PORT));

module.exports = app;
