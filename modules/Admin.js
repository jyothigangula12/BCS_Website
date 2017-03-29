import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

import axios from 'axios'



// const FormGroup = ReactBootstrap.FormGroup
// const ControlLabel = ReactBootstrap.ControlLabel
// const FormControl = ReactBootstrap.FormControl
// const HelpBlock = ReactBootstrap.HelpBlock

class Admin extends React.Component {

	handleSubmit (event) {
		event.preventDefault()
		const titleInput = event.target.elements.title
		const subtitleInput = event.target.elements.subtitle
		const startDateInput = event.target.elements.startDate
		const startTimeInput = event.target.elements.startTime
		const endDateInput = event.target.elements.endDate
		const endTimeInput = event.target.elements.endTime
		const eventTypeInput = event.target.elements.eventType
		const eventType2Input = event.target.elements.eventType2
		const eventImageInput = event.target.elements.eventImage
		const datailsInput = event.target.elements.details
		const locationInput = event.target.elements.location
		const priceInput = event.target.elements.price
		const organizerInput = event.target.elements.organizer
		var data = {title: titleInput.value, subtitle: subtitleInput.value, startDate : startDateInput.value,
		            startTime : startTimeInput.value,endDate : endDateInput.value,endTime : endTimeInput.value,
		            eventType : eventTypeInput.value,eventType2 : eventType2Input.value,eventImage : eventImageInput.value,
		            details : datailsInput.value,location : locationInput.value,price : priceInput.value,organizer : organizerInput.value}
		// console.log("--data--", name: event.target.elements.name.value, event.target.elements.email.value, event.target.elements.message.value)
		axios.post('/events/addevent', data)
			.then((response) => {
				titleInput.value = ""
				subtitleInput.value = ""
				startDateInput.value = ""
				startTimeInput.value = ""
				endDateInput.value = ""
				endTimeInput.value = ""
				eventTypeInput.value = ""
				eventType2Input.value = ""
				eventImageInput.value = ""
				datailsInput.value = ""
				locationInput.value = ""
				priceInput.value = ""
				organizerInput.value = ""
				alert("New event has been added!")
			})
		console.log("--Event Added!--")
	}

	render() {
		return (
			<div>
			<h2>Admin page</h2>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<FormGroup controlId="formControlsTitle">
				<Col componentClass={ControlLabel} sm={2}>
				Event title
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="title" placeholder="Event title" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsSubtitle">
				<Col componentClass={ControlLabel} sm={2}>
				Event subtitle
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="subtitle" placeholder="Event subtitle" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsStartdate">
				<Col componentClass={ControlLabel} sm={2}>
				Event start date
				</Col>
				<Col sm={6}>
				<FormControl type="date" name="startDate" placeholder="Event start date" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsStarttime">
				<Col componentClass={ControlLabel} sm={2}>
				Event start time
				</Col>
				<Col sm={6}>
				<FormControl type="time" name="startTime" placeholder="Event start time" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsStarttime">
				<Col componentClass={ControlLabel} sm={2}>
				Event end date
				</Col>
				<Col sm={6}>
				<FormControl type="date" name="endDate" placeholder="Event end date" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsStarttime">
				<Col componentClass={ControlLabel} sm={2}>
				Event end time
				</Col>
				<Col sm={6}>
				<FormControl type="time" name="endTime" placeholder="Event end time" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsEventtype">
				<Col componentClass={ControlLabel} sm={2}>
				Event type (topics)
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="eventType" placeholder="Event type" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsEventtype2">
				<Col componentClass={ControlLabel} sm={2}>
				Event type2 (duration)
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="eventType2" placeholder="Event type (duration)" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsEventimage">
				<Col componentClass={ControlLabel} sm={2}>
				Event image (a link)
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="eventImage" placeholder="Event image" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsDetails">
				<Col componentClass={ControlLabel} sm={2}>
				<ControlLabel>Event details</ControlLabel>
				</Col>
				<Col sm={6}>
				<FormControl componentClass="textarea" name="details" placeholder="Event details" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsLocation">
				<Col componentClass={ControlLabel} sm={2}>
				Event location
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="location" placeholder="Event location" />
				</Col>
				</FormGroup>
                
				<FormGroup controlId="formControlsPrice">
				<Col componentClass={ControlLabel} sm={2}>
				Event price
				</Col>
				<Col sm={6}>
				<FormControl type="number" name="price" placeholder="Event price" />
				</Col>
				</FormGroup>    

				<FormGroup controlId="formControlsOrganizer">
				<Col componentClass={ControlLabel} sm={2}>
				Event organizer
				</Col>
				<Col sm={6}>
				<FormControl type="text" name="organizer" placeholder="Event organizer" />
				</Col>
				</FormGroup>             

                <Col sm={6}>
				<Button type="submit">Submit</Button>
				</Col>
			</form>
			</div>
		)
	}
}

export default Admin
    
