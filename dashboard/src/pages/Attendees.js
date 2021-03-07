import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { useConfirm } from 'material-ui-confirm';
import AddNewAttendeeDialog from '../components/AddNewAttendeeDialog';
import UpdateAttendeeDialog from '../components/UpdateAttendeeDialog';

import { getAttendees, deleteAttendee } from '../actions/attendeeActions';
import {
	enqueueSnackbar as enqueueSnackbarAction,
	closeSnackbar as closeSnackbarAction,
} from '../actions/notifierActions';

import PropTypes from 'prop-types';

/**
 * MATERIAL UI IMPORTS
 */
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';

import {
	Avatar,
	Paper,
	IconButton,
	Tooltip,
	LinearProgress,
} from '@material-ui/core';

// MATERIAL UI ICONS
import { Delete as DeleteIcon, Close as CloseIcon } from '@material-ui/icons';

import { makeStyles, withStyles } from '@material-ui/core/styles';

// MATERIAL UI CUSTOM STYLING
const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
	},
	button: {
		margin: theme.spacing(1),
	},
}));

function Attendees(props) {
	const classes = useStyles();
	const confirm = useConfirm();
	const { attendees } = props.attendee;
	const [isLoading, setIsLoading] = useState(true);

	// notifier related
	const dispatch = useDispatch();
	const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
	const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

	useEffect(() => {
		props.getAttendees();
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDeleteAttendee = (id, fullName, email) => {
		// Prompt to confirm deletion
		confirm({
			description: `Permanently delete attendee: ${fullName} (${email}) ?`,
		})
			// Deletion accepted
			.then(() => props.deleteAttendee(id))
			//notifier deletion success
			.then(() => {
				enqueueSnackbar({
					message: `Attendee ${fullName} Deleted Successfully`,
					options: {
						key: new Date().getTime() + Math.random(),
						variant: 'success',
						action: (key) => (
							<IconButton
								aria-label="closeNotification"
								onClick={() => closeSnackbar(key)}
							>
								<CloseIcon />
							</IconButton>
						),
					},
				});
			})
			// notifier deletion canceled
			.catch(() => {
				enqueueSnackbar({
					message: `Deletion Attendee ${fullName} Canceled`,
					options: {
						key: new Date().getTime() + Math.random(),
						variant: 'error',
						action: (key) => (
							<IconButton
								aria-label="closeNotification"
								onClick={() => closeSnackbar(key)}
							>
								<CloseIcon />
							</IconButton>
						),
					},
				});
			});
	};

	return (
		<>
			<h1>ATTENDEES</h1>
			<AddNewAttendeeDialog userName={props.userName} />
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size="small"
					aria-label="customized table"
				>
					<TableHead>
						<TableRow>
							<StyledTableCell>Manage</StyledTableCell>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell>Avatar</StyledTableCell>
							<StyledTableCell>Full Name</StyledTableCell>
							<StyledTableCell>Email</StyledTableCell>
							<StyledTableCell>Breakfast</StyledTableCell>
							<StyledTableCell>Snacks</StyledTableCell>
							<StyledTableCell>Lunch</StyledTableCell>
							<StyledTableCell>Dinner</StyledTableCell>
						</TableRow>
					</TableHead>
					{isLoading ? null : (
						<TableBody>
							{attendees.map((attendee) => (
								<StyledTableRow key={attendee._id}>
									<StyledTableCell>
										<Tooltip title="Edit" placement="left-end">
											<UpdateAttendeeDialog
												theAttendee={attendee}
												userName={props.userName}
											/>
										</Tooltip>
										<Tooltip title="Delete" placement="left-end">
											<IconButton
												disabled={props.userName !== 'admin' ? true : false}
												aria-label="delete"
												onClick={() =>
													handleDeleteAttendee(
														attendee._id,
														attendee.fullName,
														attendee.email
													)
												}
											>
												<DeleteIcon />
											</IconButton>
										</Tooltip>
									</StyledTableCell>
									<StyledTableCell>{attendee._id}</StyledTableCell>
									<StyledTableCell>
										<Avatar alt={attendee.fullName} src={attendee.picture} />
									</StyledTableCell>
									<StyledTableCell>
										<b>{attendee.fullName}</b>
									</StyledTableCell>
									<StyledTableCell>{attendee.email}</StyledTableCell>
									<StyledTableCell>
										{attendee.foodOptions.breakfast}
									</StyledTableCell>
									<StyledTableCell>
										{attendee.foodOptions.snacks}
									</StyledTableCell>
									<StyledTableCell>
										{attendee.foodOptions.lunch}
									</StyledTableCell>
									<StyledTableCell>
										{attendee.foodOptions.dinner}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					)}
				</Table>
				{isLoading ? <LinearProgress /> : null}
			</TableContainer>
		</>
	);
}

Attendees.propTypes = {
	getAttendees: PropTypes.func.isRequired,
	deleteAttendee: PropTypes.func.isRequired,
	attendee: PropTypes.object.isRequired,
	userName: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	attendee: state.attendee,
	userName: state.auth.user.name,
});

export default connect(mapStateToProps, { getAttendees, deleteAttendee })(
	Attendees
);
