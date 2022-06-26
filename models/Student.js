const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const studentschema = Schema(
  {
    id: {
      type: String,
      required: true,
      unique: [true],
    },
    fullname: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      enum: ["CS", "CE", "TVET"],
      default: "CS",
    },
    gender: {
      type: String,
      enum: ["M", "F"],
    },
    section: {
      type: Number,
    },
    phonenumber: {
      type: Number,
    },
    year: {
      type: String,
    },
    stream: {
      type: String,
      enum: ["Web Development", "App Development", "ce"],
    },
    background: {
      type: String,
    },
    description: {
      type: String,
    },
    notifyme: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

studentschema.plugin(uniqueValidator);

module.exports = model("Student", studentschema);
