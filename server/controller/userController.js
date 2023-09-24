import userModal from "../modal/userModal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createCookie } from "../utils/createCookie.js";

export const validateUser = async function (req, res) {
  try {
    const { email } = req.payload;

    // check does user exist in User

    const userExists = await userModal.findOne({
      email,
    });

    if (!userExists) {
      return res.status(400).json({ error: `Name does not exists ` });
    }

    return res
      .status(200)
      .json({ success: "Authenticated user", data: userExists });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: error.message });
  }
};

export const register = async function (req, res) {
  try {
    const { name, email, password, address, userType } = req.body;

    // check does user exist in User

    const userExists = await userModal.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({ error: `Email already exists ` });
    }
    // encrypting the password

    const encryptedPassword = await bcrypt.hashSync(password, 12);

    // creating the user

    const newUser = await userModal.create({
      name,
      email,
      password: encryptedPassword,
      address,
      userType,
    });

    //generating token

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        id: newUser._id,
        email,
      },
      process.env.SECRET
    );

    createCookie(res, token);

    return res.status(200).json({ success: "successfully created" });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: error.message });
  }
};

export const login = async function (req, res) {
  try {
    const { email, password } = req.body;

    // check does user exist in User

    const isValidUser = await userModal.findOne({
      email,
    });

    if (!isValidUser) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      isValidUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign(
      {
        id: isValidUser._id,
        email,
      },
      process.env.SECRET
    );

    createCookie(res, token);

    return res
      .status(200)
      .json({ success: "successfully logged in", data: isValidUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

export const logout = async function (req, res) {
  try {
    createCookie(res, "");

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async function (req, res) {
  try {
    // check does user exist in User

    const user = await userModal.find({});

    if (!user) {
      return res.status(400).json({ error: "No user found" });
    }

    return res
      .status(200)
      .json({ success: "successfully logged in", data: user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
