import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import serveStatic from "serve-static";
import { readFileSync } from "fs";
import { join } from "path";
//importing .env variables

import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const app = express();

const STATIC_PATH = `${process.cwd()}/../client/dist`;

//applying middlewares for incoming request

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(serveStatic(STATIC_PATH, { index: false }));
app.use(cookieParser());

// Route Imports

import user from "./routes/userRoute.js";
import admin from "./routes/adminRoute.js";

app.use("/api/user/", user);
app.use("/api/admin/", admin);

app.use("/*", async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

export default app;
