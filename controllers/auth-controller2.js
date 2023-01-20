const signIn = async (req, res) => {
  const { name, password } = req.body;

  try {
    const foundedUser = await userService.findOneUser({ name });

    if (!foundedUser) {
      return res.status(404).json({ message: `Not found: User is not found or User "${name}" have been removed)` });
    }

    if (foundedUser.blockedStatus) {
      return res.status(403).json({ message: 'Forbidden: Access is Forbidden' });
    }

    if (foundedUser.password !== password) {
      return res.status(401).json({ message: 'Unauthorized: Incorrect password' });
    }

    const updatedUser = await userService.updateUserById(foundedUser._id, { updatedAt: new Date() });
    res.status(200).json(updatedUser);
  } catch (error) {
    errorService.handleError(res, error);
  }
};

const signUp = async (req, res) => {
  const { email } = req.body;

  try {
    const foundedUser = await userService.findOneUser({ email });
    if (foundedUser) {
      return res.status(409).json({ message: `Conflict: email already exist` });
    }

    const createdUser = await userService.createUser({ ...req.body, blockedStatus: false });
    if (!createdUser) {
      return res.status(400).json({ message: 'Bad request: Something gone wrong...', error });
    }

    res.status(201).json(createdUser);
  } catch (error) {
    errorService.handleError(res, error);
  }
};
