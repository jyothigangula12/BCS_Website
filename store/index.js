import {combineReducers, createStore, applyMiddleware} from 'redux'
import {fetchEventsAsync} from './actions'
import ReactRedux from 'react-redux'
import thunk from 'redux-thunk'

import {EventData} from './reducers'

// Create Store
const storeReducer = combineReducers({EventData})
//const storeDefaultState =  {PersonData: [{username: "jyothi", email : "jyothi@gamil.com" , password : "jyothi12" , passwordConfirmation : "jyothi12", timezone : 34},{username: "jyo", email : "jyothi@gamil.com" , password : "jyothi23" , passwordConfirmation : "jyothi23", timezone : 45}]}
const store = createStore(storeReducer, applyMiddleware(thunk))

store.dispatch(fetchEventsAsync())


 export default store       