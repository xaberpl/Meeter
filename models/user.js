const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


var nameSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: String,
  email: String,
  password: String,
  password2: String,
  datePicker: String,
},
  { timestamps: true });
module.exports = mongoose.model("User", nameSchema);