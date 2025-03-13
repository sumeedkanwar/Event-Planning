const User = require("../models/User");
const Event = require("../models/Event");
const Reminder = require("../models/Reminder");

const createEvent = async (req, res) => {
  try {
    const { eventId, name, description, date, time, category } = req.body;
    const event = await Event.findOne({
      eventId,
    });
    if (event) {
      return res.status(400).json({
        message: "Event already exists",
      });
    }
    const newEvent = new Event({
      eventId,
      name,
      description,
      date,
      time,
      category,
    });
    await newEvent.save();
    res.status(201).json({
      message: "Event created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getEventsbyDate = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json({
      events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getEventsbyCategory = async (req, res) => {
  try {
    const events = await Event.find().sort({ category: 1 });
    res.status(200).json({
      events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getEventsbyReminder = async (req, res) => {
  try {
    const events = await Event.find().sort({ reminder: 1 });
    res.status(200).json({
      events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createEvent,
  getEventsbyDate,
  getEventsbyCategory,
  getEventsbyReminder,
};
