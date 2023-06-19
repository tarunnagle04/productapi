import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fetched } from "./controller/ProductController.js";
import { middleware } from "./middleware/Middleware.js";
import { DB } from "./DB/DB.js";

app.use(cors());
export const app = express();
const router = express.Router();

dotenv.config();

app.use(router);
app.use(express.json());

router.get("/", (req, res) => {
  res.status(500).json({
    message: "Cannot /get",
  });
});

router.get("/api/:key", middleware, fetched);

DB();
