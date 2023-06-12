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
  topic: {
    type: String,
    required: true,
  },
});

const userFeedBackTopicSchema = new mongoose.Schema({
  topicName: {
    type: String,
    required: true,
  },
  topicValue: {
    type: String,
    required: true,
  },
});

const userAnnouncementSchema = new mongoose.Schema({
  announcementHeading: {
    type: String,
    required: true,
  },
  announcementHeadingValue: {
    type: String,
    required: true,
  },
  announcementDescription: {
    type: String,
    required: true,
  },
  announcementSummary: {
    type: String,
    required: true,
  },
});

export const UserSignUp = mongoose.model("User", userSignUpSchema);
export const UserFeedbackForm = mongoose.model(
  "UserFeedback",
  userFeedBackSchema
);
export const UserFeedbackTopicForm = mongoose.model(
  "UserFeedbackTopic",
  userFeedBackTopicSchema
);
export const UserAnnouncementForm = mongoose.model(
  "UserAnnouncement",
  userAnnouncementSchema
);
