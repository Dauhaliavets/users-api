import * as userService from '../services/user-service.js';

const signIn = async (req, res) => {
  const { name, password } = req.body;

  const foundedUser = await userService.findOneUser({ name });
  if (foundedUser) {
    if (foundedUser.password === password) {
      const updatedUser = await userService.updateUserById(foundedUser._id, { updatedAt: new Date() });
      res.status(200).json(updatedUser);
    } else {
      res.status(400).json({ message: 'Bad request: Incorrect password' });
    }
  } else {
    res.status(400).json({ message: 'Bad request: Incorrect user' });
  }
};

const signUp = async (req, res) => {
  const { email } = req.body;

  const foundedUser = await userService.findOneUser({ email });
  if (foundedUser) {
    res.status(409).json({ message: `Conflict: email already exist` });
  } else {
    try {
      const createdUser = await userService.createUser({ ...req.body, blockedStatus: false });
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(400).json({ message: 'Bad request: Something gone wrong...', error });
    }
  }
};

export { signIn, signUp };
