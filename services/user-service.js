import User from '../models/user.js';

export const createUser = async (params) => {
  const newUser = new User(params);
  await newUser.save();
  return newUser;
};

export const findUserById = (id) => {
  return User.findById(id);
};

export const findUsers = () => {
  return User.find({});
};

export const findOneUser = (params) => {
  return User.findOne(params);
};

export const updateUserById = async (userId, params) => {
  const updatedUser = await User.findByIdAndUpdate(userId, params);
  return updatedUser;
};

export const deleteUserById = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  return deletedUser;
};
