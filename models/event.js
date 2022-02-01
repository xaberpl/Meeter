const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

var nameSchema = new mongoose.Schema({
    eventTitle: String,
    eventDescription: String,
    eventVenue: String,
    eventCategory: String, 
    eventDate: String,
    author: String,
},
    { timestamps: true });
module.exports = mongoose.model("Event", nameSchema);