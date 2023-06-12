import express from "express";
export const userRouter = express.Router();
import {
  createEmployee,
  deleteEmployee,
  deleteUserAnnouncement,
  deleteUserFeedbackTopic,
  getEmployee,
  getUserAnnouncement,
  getUserFeedback,
  getUserFeedbackTopic,
  homeRoute,
  updateEmployee,
  updateUserFeedbackTopic,
  userAnnouncement,
  userDetails,
  userFeedback,
  userFeedbackTopic,
  userSignIn,
  userSignUp,
} from "../controller/userController.js";

//home
userRouter.get("/", homeRoute);

//post
userRouter.post("/employee", createEmployee);

//get
userRouter.get("/employee", getEmployee);

//put
userRouter.put("/employee/:id", updateEmployee);

// //delete
userRouter.delete("/employee/:id", deleteEmployee);

//signin
userRouter.post("/signin", userSignIn);

//signup
userRouter.post("/signup", userSignUp);

//user-feedback
userRouter.post("/user-feedback", userFeedback);

//get-user-feedback
userRouter.get("/user-feedback/:id", getUserFeedback);

//create-user-feedback-topic
userRouter.post("/user-feedback-topic", userFeedbackTopic);

//get-user-feedback-topic
userRouter.get("/user-feedback-topic", getUserFeedbackTopic);

//put-user-feedback-topic
userRouter.put("/user-feedback-topic", updateUserFeedbackTopic);

//delete-user-feedback-topic
userRouter.delete("/user-feedback-topic/:id", deleteUserFeedbackTopic);

//userDetails
userRouter.get("/userDetails", userDetails);

//create-user-announcement
userRouter.post("/user-announcement", userAnnouncement);

//get-user-announcement
userRouter.get("/user-announcement", getUserAnnouncement);

//delete-user-announcement
userRouter.delete("/user-announcement/:id", deleteUserAnnouncement);
