import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

//importing .env variables

import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const app = express();

//applying middlewares for incoming request

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(cookieParser());

// Route Imports

import user from "./routes/userRoute.js";

app.use("/api/user/", user);

export default app;
