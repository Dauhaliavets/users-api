import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth-routes.js';
import userRouter from './routes/user-routes.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
const URL = 'mongodb+srv://Itra:Itra123@cluster0.npu441t.mongodb.net/usersDB?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose
  .connect(`${URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use(authRouter);
app.use(userRouter);
