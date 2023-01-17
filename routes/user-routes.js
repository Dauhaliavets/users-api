const express = require('express');

const { getUsers, getUser, addUser } = require('../controllers/user-controller');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', addUser);

module.exports = router;
