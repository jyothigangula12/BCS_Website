// Reducer


const EventData = function (state = [], action) {
    //action.todoInfo = "Hey i was in the todoReducer"
    switch (action.type) {
        case 'ADD_EVENT':
            return state.concat(action.data)
        case 'DELETE_EVENT':
                const newState = [...state]
                   var tempState = newState.filter(function(el){
                        return (el._id !== action.data.event._id)
                    }) 

            return tempState
        case 'UPDATE_EVENT' :
              const tempState = [...state]
              for(let i in tempState) {
                    let event = tempState[i]
                    if(event._id === action.data.event._id){
                       tempState[i] = action.data.event   
                    }
                }
            return tempState
        default:
            return state
    }
}

const CartData = function (state = [], action) {
    switch (action.type) {
        case 'ADD_EVENT_TO_CART':
            return state.concat(action.data)
        case 'DELETE_EVENT_FROM_CART':
            const newState = [...state]
                   var tempState = newState.filter(function(el){
                        return (el._id !== action.data.event._id)
                    }) 
  
        default:
            return state
    }
}

const CheckOutData = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TOTAL_TO_CHECKOUT':
            return state.concat(action.data)
        
        default:
            return state
    }
}
export {EventData, CartData , CheckOutData}
 