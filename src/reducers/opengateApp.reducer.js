import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import calendarReducer from './calendar.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    calendar: calendarReducer,
  });
