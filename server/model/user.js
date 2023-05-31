import mongoose from "mongoose";
import validator from "validator";
const userSignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const userFeedBackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const UserSignUp = mongoose.model("User", userSignUpSchema);
export const UserFeedbackForm = mongoose.model(
  "UserFeedback",
  userFeedBackSchema
);
