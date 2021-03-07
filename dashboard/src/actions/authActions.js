import axios from 'axios';
import { returnErrors } from './errorActions';
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from './types';

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
	// getState is a redux function used to get part of redux state
	// User loading
	dispatch({ type: USER_LOADING });

	axios
		.get('/api/auth/user', tokenConfig(getState)) // tokenConfig is a function declared at the end of the file
		.then((res) =>
			dispatch({
				type: USER_LOADED,
				payload: res.data, // res.data should be an object with the user and the token itself
			})
		)
		.catch((err) => {
			// dispatch(returnErrors()) returns an object just like the dispatch bellow
			dispatch(
				returnErrors(
					err.response.data, // 1st argument : msg : err.response.data
					err.response.status // 2n argument : status : err.response.status
				)
			);
			dispatch({
				type: AUTH_ERROR,
			});
		});
};

// Login User
export const login = ({ email, password }) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	//Request body
	const body = JSON.stringify({ email, password });

	axios
		.post('/api/auth', body, config)
		.then((res) =>
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch(
				returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
			);
			dispatch({
				type: LOGIN_FAIL,
			});
		});
};

// Logout User
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
	// Get token from localStorage
	/**
	 * getState() is used to access the redux whole state
	 *  .auth means we use the authReducer state
	 *  .token means we want to get the token value from authReducer's state
	 */
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};

	// If token, add to header
	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};
