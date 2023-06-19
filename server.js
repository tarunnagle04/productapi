import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fetched } from "./controller/ProductController.js";
import { middleware } from "./middleware/Middleware.js";
import { DB } from "./DB/DB.js";

export const app = express();
app.use(cors());

app.use(express.json());
const router = express.Router();
app.use(router);
dotenv.config();


router.get("/", (req, res) => {
  res.status(500).json({
    message: "Cannot /get",
  });
});

router.get("/api/:key", middleware, fetched);

DB();
