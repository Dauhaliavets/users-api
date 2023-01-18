import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth-routes.js';
import userRouter from './routes/user-routes.js';

const PORT = 3000;
const URL = 'mongodb://127.0.0.1:27017/usersDB';

const app = express();
app.use(express.json());

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use(authRouter);
app.use(userRouter);
