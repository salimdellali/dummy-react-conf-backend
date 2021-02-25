import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core';
import {
	// Menu as MenuIcon,
	// Dashboard as DashboardIcon,
	RecordVoiceOver as RecordVoiceOverIcon,
	Schedule as ScheduleIcon,
	People as PeopleIcon,
	Note as NoteIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardIcon: {
		fontSize: 100,
	},
}));

function Overview(props) {
	const classes = useStyles();

	return (
		<>
			<h1>OVERVIEW</h1>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Card>
						<Box display="flex">
							<Box m="auto">
								<CardContent>
									<Typography gutterBottom>
										<ScheduleIcon className={classes.cardIcon} />
									</Typography>
									<Typography variant="h4" gutterBottom>
										Time Left
									</Typography>
									<Typography variant="h5">12d :: 14h :: 36m :: 58s</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card>
						<Box display="flex">
							<Box m="auto">
								<CardContent>
									<Typography gutterBottom>
										<RecordVoiceOverIcon className={classes.cardIcon} />
									</Typography>
									<Typography variant="h4" gutterBottom>
										Speakers
									</Typography>
									<Typography variant="h5">8</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card>
						<Box display="flex">
							<Box m="auto">
								<CardContent>
									<Typography gutterBottom>
										<NoteIcon className={classes.cardIcon} />
									</Typography>
									<Typography variant="h4" gutterBottom>
										Sessions
									</Typography>
									<Typography variant="h5">12</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card>
						<Box display="flex">
							<Box m="auto">
								<CardContent>
									<Typography gutterBottom>
										<PeopleIcon className={classes.cardIcon} />
									</Typography>
									<Typography variant="h4" gutterBottom>
										Attendees
									</Typography>
									<Typography variant="h5">147</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}

export default Overview;
