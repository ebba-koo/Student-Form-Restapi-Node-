const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/StudentController");
router.get("/", StudentController.index);
router.get("/:id", StudentController.show);
router.post("/", StudentController.create);
router.patch("/", StudentController.update);
router.delete("/:id", StudentController.remove);
module.exports = router;
