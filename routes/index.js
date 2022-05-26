const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  deleteUserByID,
  updateUser,
  getUserByID,
} = require("../controllers/index.js");

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUserByID);
router.patch("/update/:id", updateUser);

module.exports = router;
