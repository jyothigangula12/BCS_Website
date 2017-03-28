const mongoose = require('mongoose');

// Event object schema
var Schema = mongoose.Schema
 
var eventsSchema = new Schema({
    title: {type: String, unique: true, required: true},
    subtitle: {type: String},
    startDate: {type: Date, required: true},
    starttime: {type: Date, required: true},
    endDate: {type: Date, required: true},
    endTime: {type: Date, required: true},
    eventType: [String],
    eventType2: [String],
    image: {type: String},
    details: {type: String, required: true},
    location: {type: String},
    price: {type: Number},
    organizer: {type: String}
});

var eventsModel = mongoose.model('events', eventsSchema);