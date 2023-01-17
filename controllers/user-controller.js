const User = require('../models/user');

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getUsers = (req, res) => {
  User.find()
    .sort({ title: 1 })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => handleError(res, err));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => handleError(res, err));
};

const addUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getUsers,
  getUser,
  addUser,
};
