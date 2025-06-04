const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.send('User registered');
  } catch (err) {
    res.status(400).send('Error registering');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).send('Invalid credentials');
  }
  req.session.userId = user._id;
  req.session.role = user.role;
  res.send('Login successful');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

module.exports = router;
