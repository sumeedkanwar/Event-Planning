const User = require("../models/User");
const Event = require("../models/Event");
const Reminder = require("../models/Reminder");

const createReminder = async (req, res) => {
  try {
    const { reminderId, eventId, userId, date } = req.body;
    const reminder = await Reminder.findOne({
      reminderId,
    });
    if (reminder) {
      return res.status(400).json({
        message: "Reminder already exists",
      });
    }
    const newReminder = new Reminder({
      reminderId,
      eventId,
      userId,
      date,
    });
    await newReminder.save();
    res.status(201).json({
      message: "Reminder created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json({
      reminders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { createReminder, getReminders };
