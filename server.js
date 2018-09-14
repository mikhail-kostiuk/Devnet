const express = require('express');
const mongoose = require('mongoose');
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

app.get('/', (req, res) => res.send('Hello'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
