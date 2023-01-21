import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    blockedStatus: Boolean,
    lastVisit: String,
  },
  { timestamps: true },
);

const User = mongoose.model('users', userSchema);
export default User;
