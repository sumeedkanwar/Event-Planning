const express = require("express");
const router = express.Router();
const {
  createReminder,
  getReminders,
} = require("../controllers/reminder");
const auth = require("../middleware/auth");

router.post("/create", auth, createReminder);
router.get("/", auth, getReminders);

module.exports = router;
