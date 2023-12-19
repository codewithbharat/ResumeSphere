const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from DB');
});

app.use(bodyParser.json());


// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
// App Listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

