const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// App routes
app.use(require('./controllers/dogs.js'));
app.use(require('./controllers/cats.js'));
app.use(require('./controllers/planes.js'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
