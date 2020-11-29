const mongoose = require("mongoose");
const { validateLocaleAndSetLanguage } = require("typescript");

const myNewSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = { users: mongoose.model("Users", myNewSchema) };
