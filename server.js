var compression = require('compression')
var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
app.use(compression())
require("./models/events.js")
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db')
// Initialize models
const eventsModel = mongoose.model("events")


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))



// Events APIs
// GET /events
// display all events


app.get ("/events", (req, res) => {
	mongoose.model('events').find({}, (err, recs) => {
    	res.json(recs)  
	})
})

// POST /events/
// display all events


app.post ("/events/addevent", (req, res) => {
	eventsModel.create(req.body, (err, recs) => {
	    	console.log(err)
	    	res.json(recs)
	})
		
})


app.post ("/events/updateevent", (req, res) => {
	const event = req.body.event
    eventsModel.update({_id : event._id}, {$set: event } ,(err, recs) => {
    	console.log("Updated event",recs)
    	res.json(recs)
    })	
})

// remove event
app.post ("/events/deleteevent", (req, res) => {
	const event = req.body.event
    eventsModel.remove({_id : event._id}, (err, recs) => {
    	console.log("Deleted event", recs)
    	res.json(recs)
    })	
})




// Import pwd form form mailer
var pwd = require('./modules/p').pwd
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vivobcn@gmail.com',
        pass: pwd,
    },
});

//handle contact form sending
app.post("/sendEmail", (req, res) => {
	const mailOptions = {
	    from: 'vivobcn@gmail.com',
	    // to: req.body.email,
	    to: 'vivobcn@gmail.com',
	    replyTo: req.body.email,
	    subject: "New message from " + req.body.name,
	    html: req.body.message,
	};
	transport.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        console.log(error);
	        return res.redirect('/contacts')
	    }
	    console.log(`Message sent: ${info.response}`);
	    res.redirect('/contacts')
	});
})

// send all requests to index.html so browserHistory in React Router works
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
