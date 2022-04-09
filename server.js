require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const StudentRoute = require("./routers/student");

mongoose.connect(
  "mongodb+srv://hightech:hightech@cluster0.jjtln.mongodb.net/hightechstudentform?retryWrites=true&w=majority"
);
const db = mongoose.connection
  .once("open", function () {
    console.log("Connnection has been made");
  })
  .on("error", function (error) {
    console.log("error id:", error);
  });

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4700;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/", (req, res, next) => {
  res.render("index");
});
app.use("/api/student", StudentRoute);
