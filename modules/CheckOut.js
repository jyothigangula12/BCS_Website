import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import {ReactScriptLoaderMixin} from 'react-script-loader'
import {FieldGroup, FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap'


class GeneralInformation extends React.Component{
	constructor(props){
		super()

	}

	handleSubmit(event){
		event.preventDefault()
		var data = {}
		
		for(let input of event.target.elements){
			const name = input.getAttribute('name') 
			if (name) data[name] = input.value
		}
    }
    
render() {
			
	return ( 
		<div>
		<h2>Checkout</h2>
			<form onSubmit = {this.handleSubmit.bind(this)}>
				<ControlLabel>Enter your first name</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="First name"
				placeholder="Enter your first name">
				</FormControl>
				<ControlLabel>Last name</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="Last name"
				placeholder="Enter your last name">
				</FormControl>
				<ControlLabel>Your ID</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="Your ID"
				placeholder="Enter your ID document number">
				</FormControl>
				<ControlLabel>Company name</ControlLabel>
				<FormControl
				id="formControlsEmail"
				type="text"
				name="Company name"
				placeholder="Enter your company name">
				</FormControl>
				<ControlLabel>Email address</ControlLabel>
				<FormControl
				id="formControlsEmail"
				type="email"
				name="Email address"
				placeholder="Enter email">
				</FormControl>
				<ControlLabel>Your phone number</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="Your phone number"
				placeholder="Enter your phone number">
				</FormControl>
				<ControlLabel>Country</ControlLabel>
				<FormGroup controlId="formControlsSelect">
				<FormControl componentClass="select" placeholder="select">
				<option value="select">Select your country</option>
				<option value="spain">Spain</option>
				<option value="other">Rest of the world</option>
				</FormControl>
				</FormGroup>
				<ControlLabel>Address</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="Address"
				placeholder="Enter your address">
				</FormControl>
				<ControlLabel>Post code</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="Post code"
				placeholder="Enter your post code">
				</FormControl>
				<ControlLabel>City</ControlLabel>
				<FormControl
				id="formControlsText"
				type="text"
				name="City"
				placeholder="Enter your city">
				</FormControl>
				<ControlLabel>Additional information</ControlLabel>
				<FormControl
				id="formControlsText"
				type="textarea"
				name="Additional information"
				placeholder="If you have any order note please enter them here">
				</FormControl>
				<Checkbox  readOnly>
				Agree to terms and conditions
				</Checkbox> 			 
				</form>


		</div>
	)
}
}



class StripePaymentForm extends React.Component{
  constructor(props){
    super()
    for (let functionality in ReactScriptLoaderMixin){
      this[functionality] = ReactScriptLoaderMixin[functionality]
    }
    this.state = {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    }
  }
  

  getScriptURL () {
    return 'https://js.stripe.com/v2/';
  }

  onScriptLoaded() {
    if (!this.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  }

  onScriptError() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  }

  onSubmit(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
      }
    });
  }

  render() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
     if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (
      	<form onSubmit={this.onSubmit.bind(this)} >
        	<span>{ this.state.paymentError }</span><br />
	        <input type='text' data-stripe='number' placeholder='credit card number' /><br />
	        <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
	        <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
	        <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
	        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
        </form>
      );
    }
  }
};


class CheckOut extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<GeneralInformation/>
				<StripePaymentForm/>
			</div>
			)
		}
}

export default CheckOut