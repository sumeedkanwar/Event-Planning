const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    reminderId: {
      type: Number,
      required: true,
      unique: true,
    },
    eventId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", ReminderSchema);
