// https://www.youtube.com/watch?v=DZBGEVgL2eE
// https://medium.com/@mhdzeefan/building-a-simple-rest-api-using-node-express-mongodb-mongoose-and-postman-c58845e08800

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/book');

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to MongoDB

const mongoAtlasUri = "mongodb+srv://cjccode:qPPLDEopvvtlRoaX@testdb.q2ukswf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// use the book routes
app.use('/books', routes);

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
