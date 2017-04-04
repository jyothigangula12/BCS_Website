import {combineReducers, createStore, applyMiddleware} from 'redux'
import {fetchEventsAsync} from './actions'
import ReactRedux from 'react-redux'
import thunk from 'redux-thunk'

import {EventData, CartData} from './reducers'

// Create Store
const storeReducer = combineReducers({EventData, CartData})

// // Enable React DevTools Chrome plugin
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;
// const middleware = [thunk]
// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );

const store = createStore(storeReducer, applyMiddleware(thunk))
store.dispatch(fetchEventsAsync())

store.subscribe(() => {console.log(store.getState())})

export default store       