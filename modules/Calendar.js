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


class Calendar extends React.Component {
	constructor() {
		super()
		this.state = {events: []}
	}
// should send axios.get("/events")
// should recieve an object with all events from db

	componentDidMount() {
		axios.get("/events", ) 
			.then ((res) => {
				console.log("--RES--", res.data)
				this.setState({events: res.data})
			})

	}

	render() {
		return (
			<div>
				<h2>Calendar page</h2>
				<div>Events list goes here</div>
				<ul>
					{this.state.events.map( (event, i) => {
						return <li key={i}>{event.title}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Calendar
    
