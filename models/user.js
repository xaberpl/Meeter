const mongoose= require('mongoose')
const {ObjectId}=mongoose.Schema


var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    password2: String,
    datePicker: String,
  });
  module.exports = mongoose.model("User", nameSchema);