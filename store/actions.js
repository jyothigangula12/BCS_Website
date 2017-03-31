import axios from 'axios'

// ---------------------- Action Creators --------------------------//

const addEvent = (data) => { return {type: "ADD_EVENT", data}}
const updateEvent = (data) => {return {type : "UPDATE_EVENT", data}}
const deleteEvent = (data) => {return {type : "DELETE_EVENT",data}}

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
//const deletePersonName = (personId) => { return {type: "DELETE_PERSON", personId}}


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

//export {addPersonName, fetchPeopleAsync, addManyPeople,addPersonNameAsync,deletePersonAsync}
export {addEventAsync , updateEventAsync, fetchEventsAsync ,deleteEventAsync}