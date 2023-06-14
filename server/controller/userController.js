import { Employee } from "../model/employee.js";
import {
  UserAnnouncementForm,
  UserFeedbackForm,
  UserFeedbackTopicForm,
  UserSignUp,
} from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "AI_EXPRESS_PROJECT";

export const homeRoute = (req, res) => {
  res.send("Hello Express");
};

export const createEmployee = (req, res) => {
  try {
    const data = req.body;
    const employee = new Employee(data);
    employee
      .save()
      .then(() => res.status(201).send(employee))
      .catch((e) => res.status(400).send(e));
  } catch (e) {
    console.log(e);
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find({}, { __v: 0 });
    res.send(employee);
  } catch (e) {
    console.log(e);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    await Employee.findByIdAndUpdate(id, update);
    res.send(update);
  } catch (e) {
    console.log(e);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);
    res.send("Successfully deleted");
  } catch (e) {
    console.log(e);
  }
};

export const userSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await UserSignUp.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, existUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        email: existUser.email,
        id: existUser._id,
        name: existUser.name,
      },
      SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(201).json({ user: existUser, token, message: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const userSignUp = async (req, res) => {
  const { name, email, password, confirmPassword, isAdmin } = req.body;
  try {
    const existUser = await UserSignUp.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const confirmHashPassword = await bcrypt.hash(confirmPassword, 10);

    const result = new UserSignUp({
      name,
      email,
      password: hashPassword,
      confirmPassword: confirmHashPassword,
      isAdmin: isAdmin,
    });
    result
      .save()
      .then(() => res.status(201).send({ user: result, message: true }))
      .catch((e) => res.status(400).send(e));
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const userFeedback = async (req, res) => {
  try {
    const data = req.body;
    const { email, topic } = req.body;
    const existEmail = await UserFeedbackForm.findOne({ email });
    const existTopic = await UserFeedbackForm.findOne({ topic });
    if (existEmail && existTopic) {
      return res
        .status(400)
        .json({ message: "You have already filled out the form." });
    }
    const userFeedback = new UserFeedbackForm(data);
    userFeedback
      .save()
      .then(() => res.status(201).send({ user: userFeedback, message: true }))
      .catch((e) => res.status(400).send(e));
  } catch (e) {
    console.log(e);
  }
};

export const getUserFeedback = async (req, res) => {
  try {
    const userFeedback = await UserFeedbackForm.find(
      { topic: req.params.id },
      { __v: 0 }
    );
    res.send(userFeedback);
  } catch (e) {
    console.log(e);
  }
};

export const userFeedbackTopic = async (req, res) => {
  try {
    const data = req.body;
    const userFeedbackTopic = new UserFeedbackTopicForm(data);
    userFeedbackTopic
      .save()
      .then(() =>
        res.status(201).send({ user: userFeedbackTopic, message: true })
      )
      .catch((e) => res.status(400).send(e));
  } catch (e) {
    console.log(e);
  }
};

export const getUserFeedbackTopic = async (req, res) => {
  try {
    const userFeedbackTopic = await UserFeedbackTopicForm.find({}, { __v: 0 });
    res.send(userFeedbackTopic);
  } catch (e) {
    console.log(e);
  }
};

export const updateUserFeedbackTopic = async (req, res) => {
  try {
    const update = req.body;
    await UserFeedbackTopicForm.findByIdAndUpdate(req.body._id, update);
    res.send({ user: update, message: true });
  } catch (e) {
    console.log(e);
  }
};

export const deleteUserFeedbackTopic = async (req, res) => {
  try {
    await UserFeedbackTopicForm.deleteOne({ topicValue: req.params.id });
    await UserFeedbackForm.deleteMany({ topic: req.params.id });
    res.send({ response: "Successfully deleted", message: true });
  } catch (e) {
    console.log(e);
  }
};

export const userDetails = async (req, res) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const jwtToken = token.split(" ")[1];

  jwt.verify(jwtToken, SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const user = await UserSignUp.findOne(
      { email: decoded.email },
      { __v: 0, password: 0, confirmPassword: 0 }
    );

    return res.json(user);
  });
};

export const userAnnouncement = async (req, res) => {
  try {
    const data = req.body;
    const userAnnouncement = new UserAnnouncementForm(data);
    userAnnouncement
      .save()
      .then(() =>
        res.status(201).send({ user: userAnnouncement, message: true })
      )
      .catch((e) => res.status(400).send(e));
  } catch (e) {
    console.log(e);
  }
};

export const getUserAnnouncement = async (req, res) => {
  try {
    const userAnnouncement = await UserAnnouncementForm.find({}, { __v: 0 });
    res.send(userAnnouncement);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUserAnnouncement = async (req, res) => {
  try {
    await UserAnnouncementForm.findByIdAndDelete(req.params.id);
    res.send({ response: "Successfully deleted", message: true });
  } catch (e) {
    console.log(e);
  }
};

export const updateUserAnnouncement = async (req, res) => {
  try {
    const update = req.body;
    await UserAnnouncementForm.findByIdAndUpdate(req.body._id, update);
    res.send({ user: update, message: true });
  } catch (e) {
    console.log(e);
  }
};

export const getUserAnnouncementById = async (req, res) => {
  try {
    const id = req.params.id;
    const userAnnouncement = await UserAnnouncementForm.find(
      { _id: id },
      { __v: 0 }
    );
    res.send(userAnnouncement);
  } catch (e) {
    console.log(e);
  }
};
