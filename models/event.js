const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

var nameSchema = new mongoose.Schema({
    title: String,
    description: String,
    eventType: String,
    place: String,
    date: String,
    author: String,
    isAdult: Boolean,
},
    { timestamps: true });
module.exports = mongoose.model("Event", nameSchema);