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
app.use(cors());
app.use(cookieParser());

// Route Imports

export default app;
