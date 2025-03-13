const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/event");
const reminderRoutes = require("./routes/reminder");
const authRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/event-planner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/events", eventRoutes);
app.use("/reminders", reminderRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
