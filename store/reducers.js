// Reducer


const EventData = function (state = [], action) {
    console.log("EventData =>", action)
    //action.todoInfo = "Hey i was in the todoReducer"
    switch (action.type) {
        case 'ADD_EVENT':
            return state.concat(action.data)
        case 'DELETE_EVENT':
                debugger
                const newState = [...state]
                const toDeleteEvent = newState.filter((event) => {
                    return event._id === action.data.event._id
                })
                delete newState[toDeleteEvent] // use filter instead
                console.log(newState)
                return newState
        case 'UPDATE_EVENT' :
              const tempState = [...state]
              console.log("From UPDATE_EVENT" ,tempState)
              for(let i in tempState) {
                    let event = tempState[i]
                    if(event._id === action.data.event._id){
                        console.log("From IF=====",event._id,action.data.event._id)
                        debugger
                       tempState[i] = action.data.event
                     console.log("From After UPDATE_EVENT" ,tempState)   
                    }
                }
             console.log("UPDATE",tempState)
              return tempState
        default:
            return state
    }
}

export {EventData}
 