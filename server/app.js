const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const strategies = require('./authentication/strategies');
const serializer = require('./authentication/serializer');
const session = require('express-session');
const userRouter = require('./routers/user-router');
const bookRouter = require('./routers/book-router');
const tradeRouter = require('./routers/trade-router');

const app = express();

app.use(express.static(path.join('client', 'build')));
app.use(session({
  secret: 'we\'re not gonna test it',
  saveUninitialized: true,
  resave: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
passport.use('login', strategies.loginStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(serializer.serialize);
passport.deserializeUser(serializer.deserialize);

app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);
app.use('/api/trades', tradeRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join('client', 'build', 'index.html'));
});

module.exports = app;