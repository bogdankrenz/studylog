const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI
const connection = mongoose.connection;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
connection.once('open', () => {
    console.log("Connected to MongoDB Atlas")
})

const topicsRouter = require('./routes/topics');
const usersRouter = require('./routes/users');

app.use('/topics', topicsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})