import logo from './logo.svg';

import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from './actions/authActions';
import { clearErrors } from './actions/errorActions';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import {
	enqueueSnackbar as enqueueSnackbarAction,
	closeSnackbar as closeSnackbarAction,
} from './actions/notifierActions';

// Material UI
import {
	// Other
	Button,
	Box,
	Container,
	Typography,
	LinearProgress,
	IconButton,
} from '@material-ui/core';

// Material UI Icons
import { Close as CloseIcon } from '@material-ui/icons';

function Login(props) {
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
		msg: null,
	});

	// notifier related
	const dispatch = useDispatch();
	const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
	const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

	// mimicking componentDidUpdate Lifecycle
	// useEffect(() => {
	// 	const { error, isAuthenticated } = props;

	// 	// check if a register error
	// 	if (error.id === 'LOGIN_FAIL') {
	// 		setState({
	// 			...state,
	// 			msg: error.msg.msg,
	// 		});
	// 	} else {
	// 		setState({
	// 			...state,
	// 			msg: null,
	// 		});
	// 	}

	// 	// if authenticated, close modal
	// 	if (state.modal) {
	// 		if (isAuthenticated) {
	// 			// something
	// 		}
	// 	}
	// }, [props.error, props.isAuthenticated]);
	// }, [props.error, toggle, props.isAuthenticated, state.modal]); // as seen in the traversy github repo

	return (
		<Container maxWidth="sm">
			{/** ADMIN FROM */}
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (!values.password) {
						errors.password = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(false);

					const user = {
						email: values.email,
						password: values.password,
					};

					// Attempt to login
					props.login(user);

					// move this to the actions folder
					// enqueueSnackbar({
					// 	message: `Attendee ${values.fullName} Added Successfully`,
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
					// handleClose();
					resetForm();
				}}
			>
				{({ submitForm, isSubmitting, handleReset }) => (
					<Form>
						<Typography align="center">
							<img src={logo} className="App-logo" alt="logo" />
							<h1>React Conf 2020 Dashboard</h1>
						</Typography>
						{isSubmitting && (
							<Box mb={1}>
								<LinearProgress />
							</Box>
						)}
						{/* Email */}
						<Box mb={1} mt={-1}>
							<Field
								component={TextField}
								name="email"
								type="email"
								label="Email"
								fullWidth={true}
								// required
								// id="emailFormik"
							/>
						</Box>

						{/* Full Name */}
						<Box mb={1}>
							<Field
								component={TextField}
								name="password"
								type="password"
								label="Password"
								fullWidth={true}
								// required
							/>
						</Box>

						<Box mb={5}>
							<Button
								variant="contained"
								disabled={isSubmitting}
								onClick={submitForm}
								fullWidth={true}
							>
								Login
							</Button>
						</Box>
					</Form>
				)}
			</Formik>

			{/** READ ONLY ADMIN FROM */}
			<Formik
				initialValues={{
					email: 'readonlyadmin@dummyreactconf.com',
					password: 'roadummyreactconf',
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(false);

					const user = {
						email: values.email,
						password: values.password,
					};

					// Attempt to login
					props.login(user);

					// move this to the actions folder
					// enqueueSnackbar({
					// 	message: `Attendee ${values.fullName} Added Successfully`,
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
					// handleClose();
					resetForm();
				}}
			>
				{({ submitForm, isSubmitting }) => (
					<Form>
						<Box mb={-2}>
							<Typography align="center">
								<h5>OR</h5>
							</Typography>
						</Box>
						<Box mb={1}>
							<Button
								variant="contained"
								color="primary"
								// className={classes.button}
								disabled={isSubmitting}
								onClick={submitForm}
								fullWidth={true}
							>
								Login as Read Only Admin
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</Container>
	);
}

Login.propTypes = {
	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
