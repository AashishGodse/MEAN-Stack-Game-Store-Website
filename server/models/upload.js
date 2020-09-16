const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  Email: String,
  GameTitle: String,
  GameDescription: String,
  GamePlatform: String,
  DriveLink: String,
  ThumbnilLink: String,
  Beta: Boolean
});

module.exports = mongoose.model("upload", uploadSchema, "uploads");
