pvar compression = require('compression')
var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
app.use(compression())

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db')


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Events APIs
// GET /events
// display all events

app.get ("/events", (req, res) => {
mongoose.model('eventsModel').find({}, (err, recs) => {
    	res.json(recs)   
	})
})

// POST /events/
// display all events

app.post ("/events/addevent", (req, res) => {
	mongoose.model('eventsModel').create({title: req.body.title,
										    subtitle: req.body.subtitle,
										    startDate: req.body.startDate,
										    starttime: req.body.starttime,
										    endDate: req.body.endDate,
										    endTime: req.body.endTime,
										    eventType: req.body.eventType,
										    eventType2: req.body.eventType2,
										    image: req.body.image,
										    details: req.body.details,
										    location: req.body.location,
										    price: req.body.price,
										    organizer: req.body.organizer}, (err, recs) => {
										    	res.json(recs)   
	})
})

var pwd = require('./modules/p').pwd

const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vivobcn@gmail.com',
        pass: pwd,
    },
});


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
	        res.redirect('/contacts')
	    }
	    console.log(`Message sent: ${info.response}`);
	    res.redirect('/contacts')
	});
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})