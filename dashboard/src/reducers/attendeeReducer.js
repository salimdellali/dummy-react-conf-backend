import {
	GET_ATTENDEES,
	ADD_ATTENDEE,
	DELETE_ATTENDEE,
	UPDATE_ATTENDEE,
	ATTENDEES_LOADING,
} from '../actions/types';

// const initialState = {
// 	attendees: [
// 		{
// 			_id: 1,
// 			email: 'edmond.roux@example.com',
// 			fullName: 'Edmond Roux',
// 			picture: 'https://randomuser.me/api/portraits/men/12.jpg',
// 			foodOptions: {
// 				breakfast: 'Classic',
// 				snacks: 'Healthy',
// 				lunch: 'Healthy',
// 				dinner: 'Healthy',
// 			},
// 		},
// 		{
// 			_id: 2,
// 			email: 'patricia.pastor@example.com',
// 			fullName: 'Patricia Pastor',
// 			picture: 'https://randomuser.me/api/portraits/women/86.jpg',
// 			foodOptions: {
// 				breakfast: 'No Preference',
// 				snacks: 'Regular',
// 				lunch: 'Fast Food',
// 				dinner: 'Fast Food',
// 			},
// 		},
// 		{
// 			_id: 3,
// 			email: 'marina.rodriguez@example.com',
// 			fullName: 'Marina Rodriguez',
// 			picture: 'https://randomuser.me/api/portraits/women/28.jpg',
// 			foodOptions: {
// 				breakfast: 'No Preference',
// 				snacks: 'Healthy',
// 				lunch: 'Healthy',
// 				dinner: 'Fast Food',
// 			},
// 		},
// 		{
// 			_id: 4,
// 			email: 'ceyhun.kuday@example.com',
// 			fullName: 'Ceyhun Kuday',
// 			picture: 'https://randomuser.me/api/portraits/men/61.jpg',
// 			foodOptions: {
// 				breakfast: 'English',
// 				snacks: 'Healthy',
// 				lunch: 'Healthy',
// 				dinner: 'Healthy',
// 			},
// 		},
// 		{
// 			_id: 5,
// 			email: 'marisa.menge@example.com',
// 			fullName: 'Marisa Menge',
// 			picture: 'https://randomuser.me/api/portraits/women/83.jpg',
// 			foodOptions: {
// 				breakfast: 'Classic',
// 				snacks: 'Regular',
// 				lunch: 'Fast Food',
// 				dinner: 'Fast Food',
// 			},
// 		},
// 	],
// };

// eslint-disable-next-line import/no-anonymous-default-export

const initialState = {
	attendees: [],
	loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ATTENDEES:
			return {
				...state,
				attendees: action.payload,
				loading: false,
			};

		case ADD_ATTENDEE:
			return {
				...state,
				attendees: [...state.attendees, action.payload],
			};

		case UPDATE_ATTENDEE:
			const IndexRelatedAttendee = state.attendees.findIndex(
				(attendee) => attendee._id === action.payload._id
			);

			// Deepclone of state into newState (important !!!)
			const newState = JSON.parse(JSON.stringify(state));

			newState.attendees[IndexRelatedAttendee] = action.payload;

			return newState;

		case DELETE_ATTENDEE:
			return {
				...state,
				attendees: state.attendees.filter(
					(attendee) => attendee._id !== action.payload
				),
			};

		case ATTENDEES_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
