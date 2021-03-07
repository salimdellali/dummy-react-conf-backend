// import npm packages
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv/config');
require('./database');

// Init app
const app = express();

// to allow the API to be fetched from anywhere
app.use(cors());

// to be able to parse json data and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes and use routes as middlewares
app.use('/api/speakers', require('./routes/api/speakers'));
app.use('/api/schedules', require('./routes/api/schedules'));
app.use('/api/attendees', require('./routes/api/attendees'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// test if / route works
// app.get('/', (req, res) => {
// 	res.send('we are on root');
// });

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('dashboard/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'dashboard', 'build', 'index.html'));
	});
}

// set PORT to listen to
const PORT = process.env.PORT || 1234;
app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(`Server started on port ${PORT} ...`);
});
