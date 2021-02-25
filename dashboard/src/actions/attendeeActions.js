import {
	GET_ATTENDEES,
	ADD_ATTENDEE,
	UPDATE_ATTENDEE,
	DELETE_ATTENDEE,
	ATTENDEES_LOADING,
} from './types';
import axios from 'axios';

export const getAttendees = () => (dispatch) => {
	dispatch(setAttendeesLoading());
	axios.get('/api/attendees').then((res) => {
		dispatch({
			type: GET_ATTENDEES,
			payload: res.data,
		});
	});
};

export const addAttendee = (newAttendee) => (dispatch) => {
	axios.post('/api/attendees', newAttendee).then((res) =>
		dispatch({
			type: ADD_ATTENDEE,
			payload: res.data,
		})
	);
};

export const updateAttendee = (updatedAttendee) => (dispatch) => {
	axios.put('/api/attendees', updatedAttendee).then((res) =>
		dispatch({
			type: UPDATE_ATTENDEE,
			payload: updatedAttendee,
		})
	);
	// return {
	// 	type: UPDATE_ATTENDEE,
	// 	payload: updatedAttendee,
	// };
};

export const deleteAttendee = (id) => (dispatch) => {
	axios.delete(`api/attendees/${id}`).then((res) =>
		dispatch({
			type: DELETE_ATTENDEE,
			payload: id,
		})
	);
};

export const setAttendeesLoading = () => {
	return {
		type: ATTENDEES_LOADING,
	};
};
