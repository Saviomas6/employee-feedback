import { Employee } from "../model/employee.js";
import { UserSignUp } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KET = "AI_EXPRESS_PROJECT";

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
      { email: existUser.email, id: existUser._id },
      SECRET_KET
    );

    res.status(201).json({ user: existUser, token, message: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const userSignUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
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
