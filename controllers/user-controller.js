import * as userService from '../services/user-service.js';
import * as errorService from '../services/error-service.js';

const getUsers = async (req, res) => {
  try {
    const foundedUsers = await userService.findUsers();
    res.status(200).json(foundedUsers);
  } catch (error) {
    errorService.handleError(res, error);
  }
};

const getUser = async (req, res) => {
  try {
    const foundedUser = await userService.findUserById(req.params.id);
    res.status(200).json(foundedUser);
  } catch (error) {
    errorService.handleError(res, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUserById(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    errorService.handleError(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    errorService.handleError(res, error);
  }
};

export { getUsers, getUser, deleteUser, updateUser };
