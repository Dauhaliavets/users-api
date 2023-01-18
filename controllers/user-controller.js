import * as userService from '../services/user-service.js';

const handleError = (res, error) => {
  res.status(500).json({ message: 'Some ERROR', error });
};

const getUsers = async (req, res) => {
  try {
    const foundedUsers = await userService.findUsers();
    res.status(200).json(foundedUsers);
  } catch (err) {
    handleError(res, err);
  }
};

const getUser = async (req, res) => {
  try {
    const foundedUser = await userService.findUserById(req.params.id);
    res.status(200).json(foundedUser);
  } catch (err) {
    handleError(res, err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUserById(req.params.id);
    req.status(200).json(deletedUser);
  } catch (err) {
    handleError(res, err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    req.status(200).json(updatedUser);
  } catch (err) {
    handleError(res, err);
  }
};

export { getUsers, getUser, deleteUser, updateUser };
