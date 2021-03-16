import {
	GET_ATTENDEES,
	ADD_ATTENDEE,
	UPDATE_ATTENDEE,
	DELETE_ATTENDEE,
	ATTENDEES_LOADING,
} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

// import {
// 	enqueueSnackbar as enqueueSnackbarAction,
// 	closeSnackbar as closeSnackbarAction,
// } from '../actions/notifierActions';

// notifier related
// const dispatch = useDispatch();
// const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
// const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

// enqueueSnackbar({
// 	message: `Attendee ${fullName} Deleted Successfully`,
// 	options: {
// 		key: new Date().getTime() + Math.random(),
// 		variant: 'success',
// 		action: (key) => (
// 			<IconButton
// 				aria-label="closeNotification"
// 				onClick={() => closeSnackbar(key)}
// 			>
// 				<CloseIcon />
// 			</IconButton>
// 		),
// 	},
// });

// enqueueSnackbar({
// 	message: `Deletion Attendee ${fullName} Canceled`,
// 	options: {
// 		key: new Date().getTime() + Math.random(),
// 		variant: 'error',
// 		action: (key) => (
// 			<IconButton
// 				aria-label="closeNotification"
// 				onClick={() => closeSnackbar(key)}
// 			>
// 				<CloseIcon />
// 			</IconButton>
// 		),
// 	},
// });

export const getAttendees = () => (dispatch) => {
	dispatch(setAttendeesLoading());
	axios
		.get('/api/attendees')
		.then((res) => {
			dispatch({
				type: GET_ATTENDEES,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const addAttendee = (newAttendee) => (dispatch) => {
	axios
		.post('/api/attendees', newAttendee)
		.then((res) =>
			dispatch({
				type: ADD_ATTENDEE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const updateAttendee = (updatedAttendee) => (dispatch, getState) => {
	axios
		.put('/api/attendees', updatedAttendee, tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: UPDATE_ATTENDEE,
				payload: updatedAttendee,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const deleteAttendee = (id) => (dispatch, getState) => {
	axios
		.delete(`api/attendees/${id}`, tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: DELETE_ATTENDEE,
				payload: id,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const setAttendeesLoading = () => {
	return {
		type: ATTENDEES_LOADING,
	};
};
