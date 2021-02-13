const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const mediaRouter = require('./routes/media.router');
const bookRouter = require('./routes/book.router');
const movieRouter = require('./routes/movie.router');
const televisionRouter = require('./routes/television.router');
const podcastRouter = require('./routes/podcast.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/media', mediaRouter);
app.use('/api/book', bookRouter);
app.use('/api/movie', movieRouter);
app.use('/api/televison', televisionRouter);
app.use('/api/podcast', podcastRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
