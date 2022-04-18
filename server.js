require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const StudentRoute = require("./routers/student");
const Student = require("./models/Student");

mongoose.connect(process.env.DATABASE_URL);
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

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/students", async (req, res, next) => {
  const students = await Student.find();
  let genderQuantity = {
    male: 0,
    female: 0,
  };

  students.map((std) => {
    if (std.gender == "M") genderQuantity.male++;
    else if (std.gender == "F") genderQuantity.female++;
  });

  res.render("students", { students, genderQuantity });
});

app.get("/success", (req, res, next) => {
  res.render("success");
});

app.use("/api/student", StudentRoute);

app.use(express.static("views"));
