const { Schema, model } = require("mongoose");

const studentschema = Schema(
  {
    id: {
      type: String,
      required: true,
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

module.exports = model("Student", studentschema);
