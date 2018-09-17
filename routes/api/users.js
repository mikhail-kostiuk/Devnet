const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys');

const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: '/users works' }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((existentUser) => {
    if (existentUser) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const avatar = gravatar.url(req.body.email, {
      s: '200', // Size
      r: 'pg', // Rating
      d: 'mm', // Default
    });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password,
    });
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(e => console.log(e));
      });
    });
  });
});

// @route   GET api/users/login
// @desc    Login user / Returning JWT token
// @access  Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check user
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT payload
        const payload = { id: user.id, name: user.username, avatar: user.avatar };

        // Sign token
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({ success: true, token: `Bearer ${token}` });
        });
      } else {
        return res.status(400).json({ msg: 'Password incorrect' });
      }
    });
  });
});
module.exports = router;
