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
        message: "An error Occured: ",
      });
    });
};

//search by id
const show = (req, res, next) => {
  let studentId = req.params.id;
  Student.findOne({ id: studentId })
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
const create = (req, res, next) => {
  let student = new Student({
    id: req.body.id,
    fullname: req.body.fullname,
    department: req.body.department,
    gender: req.body.gender,
    year: req.body.year,
    stream: "ce",
    background: req.body.background,
    description: req.body.description,
    section: req.body.section,
    phonenumber: req.body.phonenumber,
    notifyme: req.body.notifyme,
  });

  student
    .save()
    .then((response) => {
      res.redirect("/success");
    })

    .catch((error) => {
      res.redirect("/");
    });
};

//update student data
const update = (req, res, next) => {
  let studentId = req.body.id;
  let updatedData = {
    id: req.body.id,
    fullname: req.body.fullname,
    department: req.body.department,
    gender: req.body.gender,
    year: req.body.year,
    stream: req.body.stream,
    background: req.body.background,
    description: req.body.description,
    section: req.body.section,
    phonenumber: req.body.phonenumber,
    notifyme: req.body.notifyme,
  };

  Student.findOneAndUpdate(
    { id: studentId },
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

const remove = (req, res, next) => {
  let StudentID = req.params.id;
  Student.findOneAndDelete({ id: StudentID }, { new: true })
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
  create,
  update,
  remove,
};
