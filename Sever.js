require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const authRoutes = require('./routes/auth');
const { isAuthenticated, isAdmin } = require('./middleware/auth');

const app = express();
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 3600000 }
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'));

app.use('/api', authRoutes);

app.get('/api/dashboard', isAuthenticated, (req, res) => {
  res.send(`Welcome, User ${req.session.userId}`);
});

app.get('/api/admin', isAuthenticated, isAdmin, (req, res) => {
  res.send('Welcome Admin');
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
