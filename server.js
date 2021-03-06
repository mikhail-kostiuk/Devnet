const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const keys = require('./config/keys');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// Connect to MongoDB
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assest
  app.use(express.static('client/build'));

  // Express will serve up the index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
