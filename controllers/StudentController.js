const { response } = require("express");
const Student = require("../models/Student");

// show the list of students
const index = (req, res, next) => {
  Student.find()
    .then((response) => {
      res.json({
        data: response,
      });
    })
    .catch((error) => {
      req.json({
        message: "An error Occured",
      });
    });
};

//search by id
const show = (req, res, next) => {
  let studentId = req.body.id;
  Student.find({ id: studentId })
    .then((response) => {
      res.json({
        data: response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured",
      });
    });
};

//store student data
const store = (req, res, next) => {
  let student = new Student({
    id: req.body.id,
    fullname: req.body.fullname,
    department: req.body.department,
    gender: req.body.gender,
    year: req.body.year,
    stream: req.body.stream,
    background: req.body.background,
    description: req.body.description,
  });

  student
    .save()
    .then((response) => {
      res.json({
        message: "Data succefully added!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};

//update employee data
const update = (req, res, next) => {
  let StudentID = req.body.id;
  let updatedData = {
    id: req.body.id,
    fullname: req.body.fullname,
    department: req.body.department,
    gender: req.body.gender,
    year: req.body.year,
    stream: req.body.stream,
    background: req.body.background,
    description: req.body.description,
  };

  Student.findOneAndUpdate(
    { id: StudentID },
    { $set: updatedData },
    { new: true }
  )
    .then((response) => {
      res.json({
        message: "Data succefully updated!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured",
      });
    });
};

const destroy = (req, res, next) => {
  let StudentID = req.body.id;
  Student.find({ id: StudentID }, { new: true })
    .then(() => {
      res.json({
        message: "Data succefully deleted!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
