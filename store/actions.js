import axios from 'axios'

// ---------------------- Action Creators --------------------------//

const addEvent = (data) => { return {type: "ADD_EVENT", data}}
const updateEvent = (data) => {return {type : "UPDATE_EVENT", data}}
const deleteEvent = (data) => {return {type : "DELETE_EVENT",data}}
const addEventToCart = (data) => {return {type: "ADD_EVENT_TO_CART", data}}
const addToCheckOut = (data) => {return {type : "ADD_TOTAL_TO_CHECKOUT",data}}

const addEventAsync = (event , callback) => {
	return (dispatch) => {
		axios.post('/events/addevent', event)
		  .then(function (response) {
		    dispatch(addEvent(response.data))
		    if (callback) callback()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}


const updateEventAsync = (data , callback) => {
	return (dispatch) => {
		axios.post('/events/updateevent', data)
		  .then(function (response) {
		    dispatch(updateEvent(data))
		    if (callback) callback()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

const fetchEventsAsync = (callback) => {
	return (dispatch) => {
		axios.get("/events", ) 
			.then ((res) => {
				for(let event of res.data) {
					dispatch(addEvent(event))
				}
				if (callback) callback()
			})
	}
}

const deleteEventAsync = (data, callback) => {
		return (dispatch) => {
			axios.post('/events/deleteevent', data)
			  .then(function (response) {
			    dispatch(deleteEvent(data))
			    if(callback) callback()
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	}

}

const addEventToCartAsync = (data, callback) => {
	return (dispatch) => {
		dispatch(addEventToCart(data))
		if(callback) callback()
	}
}

const addTotalToCheckOutAsync = (data, callback) => {
	return (dispatch) => {
		dispatch(addToCheckOut(data))
		if(callback) callback()
	}
}

export {addEventAsync , updateEventAsync, fetchEventsAsync ,deleteEventAsync, addEventToCartAsync , addTotalToCheckOutAsync}