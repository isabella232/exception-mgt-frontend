import { combineReducers } from "redux";
import ticketReducer from './TicketReducer';

export default combineReducers({
tickets:ticketReducer
})