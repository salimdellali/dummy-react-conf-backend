/**
 * The main point of this rootReducer is just to bring together all of our other reducers
 */
import { combineReducers } from 'redux';
import attendeeReducer from './attendeeReducer';
import speakerReducer from './speakerReducer';
import scheduleReducer from './scheduleReducer';
import notifierReducer from './notifierReducer';

export default combineReducers({
	attendee: attendeeReducer,
	speaker: speakerReducer,
	schedule: scheduleReducer,
	notifier: notifierReducer,
});
