import express from "express";
export const userRouter = express.Router();
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getUserFeedback,
  homeRoute,
  updateEmployee,
  userFeedback,
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
userRouter.get("/user-feedback", getUserFeedback);
