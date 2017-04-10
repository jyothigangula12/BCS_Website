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

class Contacts extends React.Component {

	handleSubmit (event) {
		event.preventDefault()
		const nameInput = event.target.elements.name
		const emailInput = event.target.elements.email
		const messageInput = event.target.elements.message
		var data = {name: nameInput.value, email: emailInput.value, message: messageInput.value}
		// console.log("--data--", name: event.target.elements.name.value, event.target.elements.email.value, event.target.elements.message.value)
		axios.post('/sendEmail', data)
			.then((response) => {
				nameInput.value = ""
				emailInput.value = ""
				messageInput.value = ""
				alert("Your message has been sent, thanks!")
			})
		console.log("--SeNd!--")
	}

	render() {
		return (
			<div>
			<h2>Contacts</h2>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<FormGroup controlId="formControlsName">
				<Col componentClass={ControlLabel} sm={2}>
				Your name
				</Col>
				<Col sm={10}>
				<FormControl type="text" name="name" placeholder="Your name" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsEmail">
				<Col componentClass={ControlLabel} sm={2}>
				Email
				</Col>
				<Col sm={10}>
				<FormControl type="email" name="email" placeholder="Your Email" />
				</Col>
				</FormGroup>

				<FormGroup controlId="formControlsMessage">
				<Col componentClass={ControlLabel} sm={2}>
				<ControlLabel>Your message</ControlLabel>
				</Col>
				<Col sm={10}>
				<FormControl componentClass="textarea" name="message" placeholder="Type your message" />
				</Col>
				</FormGroup>

				<Col sm={10}>
				<Button type="submit">Submit</Button>
				</Col>
			</form>

			</div>
		)
	}
}

export default Contacts
    
