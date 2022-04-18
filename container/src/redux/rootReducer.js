import { combineReducers } from 'redux'
import generalReducer from './generalReducer/generalReducer'
import authorizationReducer from './authorizationReducer/authorizationReducer'
import dashboardReducer from './dashboard/dashboardReducer'
const rootReducer = combineReducers({
  generalReducer: generalReducer,
  dashboardReducer: dashboardReducer,
  authorizationReducer:authorizationReducer,
})

export default rootReducer

