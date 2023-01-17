const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/user');

const PORT = 3000;
const URL = 'mongodb://127.0.0.1:27017/usersDB';
const ERROR_MSG_UNEXPECTED = 'Something goes wrong...';

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get('/users', (req, res) => {
  User.find()
    .sort({ title: 1 })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => handleError(res, ERROR_MSG_UNEXPECTED));
});

app.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => handleError(res, ERROR_MSG_UNEXPECTED));
});

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => handleError(res, ERROR_MSG_UNEXPECTED));
});
