import cors from "cors";
import express from "express";
//import { auth } from "express-oauth2-jwt-bearer"; /* For authentication usage */

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2999;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// importing Routers
/* const Router = require("./routers/router"); */

// importing Controllers
/* const Controller = require("./controllers/controller"); */

// importing DB
/* const db = require("./db/models/index");
const { db1, db2 } = db; */

// initializing Controllers -> note the lowercase for the first word
/* const conTroller = new ConTroller(db1); */

// initializing Routers
/* const rouTer = new RouTer(express, conTroller).routes();

// USING the routers
/* app.use("/route", rouTer);*/

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});