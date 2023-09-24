import express from "express";
import {
  login,
  register,
  logout,
  validateUser,
  getAllUsers,
} from "../controller/userController.js";
import verifyJwt from "../utils/verifyToken.js";

const router = express.Router();

router.route("/validateUser").post(verifyJwt, validateUser);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/getAllUsers").get(getAllUsers);

export default router;
