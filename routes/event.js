const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEventsbyDate,
  getEventsbyCategory,
  getEventsbyReminder,
} = require("../controllers/event");
const auth = require("../middleware/auth");

router.post("/create", auth, createEvent);
router.get("/date", auth, getEventsbyDate);
router.get("/category", auth, getEventsbyCategory);
router.get("/reminder", auth, getEventsbyReminder);

module.exports = router;
