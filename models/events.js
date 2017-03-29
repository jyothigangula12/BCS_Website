const mongoose = require('mongoose');

// Event object schema
var Schema = mongoose.Schema
 
var eventsSchema = new Schema({
    title: {type: String, unique: true, required: true},
    subtitle: {type: String},
    startDate: {type: String, required: true},
    startTime: {type: String, required: true},
    endDate: {type: String, required: true},
    endTime: {type: String, required: true},
    eventType: [String],
    eventType2: [String],
    image: {type: String},
    details: {type: String, required: true},
    location: {type: String},
    price: {type: Number},
    organizer: {type: String}
});

mongoose.model('events', eventsSchema);