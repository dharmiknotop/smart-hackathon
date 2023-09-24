import express from "express";
import { contactUs } from "../controller/adminController.js";
import verifyJwt from "../utils/verifyToken.js";

const router = express.Router();

router.route("/getAllContactUs").post(verifyJwt, contactUs);

export default router;
