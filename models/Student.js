const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const studentschema = Schema(
  {
    id: {
      type: String,
      required: true,
      unique: [true, "fghjkl"],
    },
    fullname: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      enum: ["CS", "CE", "AF"],
      default: "CS",
    },
    gender: {
      type: String,
      enum: ["M", "F"],
    },
    year: {
      type: String,
    },
    stream: {
      type: String,
      enum: ["Website Development", "Mobile App Development"],
    },
    background: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

studentschema.plugin(uniqueValidator);

module.exports = model("Student", studentschema);
