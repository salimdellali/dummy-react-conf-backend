import React from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// icons imports
import { MeetingRoom as MeetingRoomIcon } from '@material-ui/icons';

//
import { Button } from '@material-ui/core';

function Logout(props) {
	return (
		<>
			<Button
				variant="contained"
				startIcon={<MeetingRoomIcon />}
				onClick={props.logout}
			>
				Logout
			</Button>
		</>
	);
}

Logout.propTypes = {
	logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);
