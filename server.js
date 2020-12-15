// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Init app
const app = express();

// to allow the API to be fetched from anywhere
app.use(cors());

// to be able to parse json data and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes and use routes as middlewares
const speakersRoute = require('./routes/api/speakers');
const schedulesRoute = require('./routes/api/schedules');
app.use('/api/speakers', speakersRoute);
app.use('/api/schedules', schedulesRoute);

// test if / route works
app.get('/', (req, res) => {
    res.send('we are on root');
});

// Database Setup
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(
    process.env.DB_CONNECTION,
    (err) => {
        if (err) throw err;
        console.log('Connected to DB successfully');
    }
);

// set PORT to listen to
const PORT = process.env.PORT || 1234;
app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Server started on port ${PORT} ...`);
});