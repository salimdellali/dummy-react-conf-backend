import { GET_OVERVIEW } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';

export const getOverview = () => (dispatch) => {
	axios
		.get('/api/overview')
		.then((res) => {
			dispatch({
				type: GET_OVERVIEW,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};
