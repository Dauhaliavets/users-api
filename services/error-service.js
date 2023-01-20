export const handleError = (res, error) => {
  res.status(500).json({ message: 'Some ERROR', error });
};
