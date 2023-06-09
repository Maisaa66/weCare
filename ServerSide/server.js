//Server set app
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoutes = require("./Routes/users.routes");
const providersRoutes = require("./Routes/serviceProviders.routes");
const requestsRoutes = require("./Routes/requests.routes");
const reviewsRoutes = require("./Routes/reviews.routes");
const statsRoutes = require("./Routes/stats.routes");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { addTimeOfRequest } = require("./Middlewares/helpers.middleware");
const path = require("path");
const fs = require("fs");
const stripe = require("./Routes/stripe.routes");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(fileUpload());
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DATABASE_URL.replace("<password>", process.env.DATABASE_PASSWORD);
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
app.use("/api/v1/stats", statsRoutes);

// upload file route

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  console.log(req.files);
  let pathsArray = [];
  const file = req.files.file;
  const email = req.body.email;
  let oneStepBack = path.join(__dirname, "../");
  fs.mkdirSync(`${oneStepBack}/clientside/public/uploads/${email.split("@")[0]}`, {
    recursive: true,
  });
  Object.values(req.files).forEach((file) => {
    pathsArray.push(`/uploads/${email.split("@")[0]}/${file.name}`);
    file.mv(
      `${oneStepBack}/clientside/public/uploads/${email.split("@")[0]}/${file.name}`,
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      }
    );
  });

  res.json({ filePath: pathsArray });
});

app.use("/api/v1/stripe", stripe);

app.listen(PORT, () => console.log("http://localhost:" + PORT));

module.exports = app;
