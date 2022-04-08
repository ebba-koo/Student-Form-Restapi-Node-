const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const StudentRoute = require("./routers/student");

mongoose.connect("mongodb://localhost/studentForm");
const db = mongoose.connection
  .once("open", function () {
    console.log("Connnection has been made");
  })
  .on("error", function (error) {
    console.log("error id:", error);
  });

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/student", StudentRoute);
