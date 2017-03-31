import React from 'react'
import ReactBootstrap from 'react-bootstrap'

import {connect} from 'react-redux'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

import FormControl from 'react-bootstrap/lib/FormControl'
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

import axios from 'axios'


class Calendar extends React.Component {
// should send axios.get("/events")
// should recieve an object with all events from db

	render() {
		return (
			<div>
				<h2>Calendar page</h2>
				<Accordion>
					{this.props.events.map( (event, i) => {
                        return(
								<Panel header={<div>{event.startDate} – {event.endDate}<h2>{event.title}: <small>{event.subtitle}</small></h2><div>{event.startTime} : {event.endTime}</div></div>} eventKey={i} key={i}>
								<div>
								<div><span><strong>Type: </strong></span>{event.eventType}</div>
								<div><span><strong>Duration: </strong></span>{event.eventType2}</div>
								<div><img src={event.image}/></div>
								<div><span><strong>Details: </strong></span>{event.details}</div>
								<div><strong>Location: </strong><address><strong>BCS</strong><br/>{event.location}<br/><abbr title="Phone">P:</abbr>(34) 666-13-13</address></div>
								<div><span><strong>Price: </strong></span>{event.price}</div>
								<div><span><strong>Organizer: </strong></span>{event.organizer}</div>
								</div>	
								</Panel>
							)
					})}
				</Accordion>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({events: state.EventData})

export default connect(mapStateToProps)(Calendar)
    
