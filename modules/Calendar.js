import React from 'react'
import ReactBootstrap from 'react-bootstrap'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

import FormControl from 'react-bootstrap/lib/FormControl'
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import NavLink from './NavLink'

import {addEventToCartAsync , addTotalToCheckOutAsync} from '../store/actions'

import axios from 'axios'


class Calendar extends React.Component {
		constructor(props){
			super()
			this.state = {cart: {}, open :false}
		
		}
handleChangeStudentsNumber(event){
			const updatedStudentsNumber = Object.assign(
				{},
				this.state.number,
				{number: event.target.value})
			this.setState({number: updatedStudentsNumber})
			
}

handleAddToCart(event){
		console.log("-- this.state--", this.state.number)
		console.log("--event.target--",event)
		var data = {}
		data.number = this.state.number
		data.event = event
	
		this.props.addEventToCartAsync(data, ()=>{
			this.setState({ open: !this.state.open })
			console.log('event added to cart!!!!')
		})
}

handleCheckOut(event){
    	var data = {}
		debugger
		var pricetotal = event.price
		var no = this.state.number
        var Amount = pricetotal * no.number + (pricetotal * no.number) * 0.21
	    var subTotal = pricetotal * no.number
	    console.log(pricetotal * no.number)
	    
	    data.Total = Amount
	    data.subTotal = subTotal
	    console.log("++++++++Total++++++++", Amount, "++++++Subtotal+++++++", subTotal)
    	this.props.addTotalToCheckOutAsync(data, ()=>{console.log('checkout total added!!!!')})
    }

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
								<div></div>
								<div><span><strong>Details: </strong></span>{event.details}</div>
								<div><strong>Location: </strong><address><strong>BCS</strong><br/>{event.location}<br/><abbr title="Phone">P:</abbr>(34) 666-13-13</address></div>
								<div><span><strong>Price: </strong></span>{event.price}</div>
								<div><span><strong>Organizer: </strong></span>{event.organizer}</div>
								<input type="number" name="studentsNumber" onChange={this.handleChangeStudentsNumber.bind(this)}></input>
								{/*<Button type="button" onClick={this.handleAddToCart.bind(this, event)}>Add to cart</Button>*/}
									<Button type="button" onClick={ this.handleAddToCart.bind(this, event)}>
									Add to cart
									</Button>
									<p/>
									<Panel collapsible expanded={this.state.open}>
									<p>The event has been added to cart.</p>
									<NavLink to="/checkout"><Button onClick = {this.handleCheckOut.bind(this,event)}>Checkout</Button></NavLink>
									<NavLink to="/cart"><Button>View cart</Button></NavLink>
									</Panel>
									</div>
								</Panel>
							)
					})}
				</Accordion>
              
            </div>
		)
	}
}

const mapStateToProps = (state) => ({events: state.EventData ,cartObj: state.CartData}) // getting info from the store
const mapDispatchToProps = (dispatch) => bindActionCreators({addEventToCartAsync , addTotalToCheckOutAsync}, dispatch) // sending info to the store
export default connect(mapStateToProps, mapDispatchToProps)(Calendar) // we connect both things from above
    
