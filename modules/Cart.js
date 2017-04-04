import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import Table from 'react-bootstrap/lib/Table'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Button from 'react-bootstrap/lib/Button'

//import store from '../store/index'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import axios from 'axios'

class Cart extends React.Component{
	constructor(props){
			super()
		}

		
  render() {
    return (
    	<div><h1>Cart</h1>

		  <Table responsive>
		    <thead>
		      <tr>
		        <th>X</th>
		        <th>Product</th>
		        <th>Price</th>
		        <th>Description</th>
		        <th>Amount</th>
		        <th>Total</th>

		      </tr>
		    </thead>
		    <tbody>
		    {this.props.cartObj.map( (event, i) => (
			    <tr key={i}>
			        <td>Remove button</td>
			        <td>{event.event.title}</td>
			        <td>{event.event.price}</td>
			        <td>{event.event.details}</td>
			        <td>{event.number.number}</td>
			        <td>{event.event.price * event.number.number}</td>

			    </tr>

            ))}
            </tbody>
			</Table>
			<div id="cartTotal">
			<h1>Cart Total</h1>
			<form>
			{this.props.cartObj.map( (item) => (
		    <FormGroup>
		      <InputGroup>
		        <InputGroup.Addon>Subtotal</InputGroup.Addon>
		        <FormControl type="number" value = {item.event.price * item.number.number}/>
		      </InputGroup>
  		      <InputGroup>
		        <InputGroup.Addon>Total (IVA incl.)</InputGroup.Addon>
		        <FormControl type="number" value = {item.event.price * item.number.number + (item.event.price * item.number.number) * 0.21}/>
		      </InputGroup>
		    </FormGroup>
		    ))}
		    <Button id="checkoutButton" type = "button">PROCEED TO CHECKOUT</Button>
		    </form>	
		    </div>
        </div>
		
   
	)}
}

const mapStateToProps = (state) => ({cartObj: state.CartData}) // getting info from the store
//const mapDispatchToProps = (dispatch) => bindActionCreators({addEventToCartAsync}, dispatch) // sending info to the store
export default connect(mapStateToProps)(Cart) // we connect both things from above
 