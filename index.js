import mongoose from "mongoose";
import cors from "cors";
import express from "express";

const app = express();

export const nomoex = (mongoUrl, port = 5200, corsOrigin = true) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: corsOrigin,
      methods: ["GET", "PUT", "POST", "DELETE"],
      credentials: true,
    })
  );
  app.listen(port, () => console.log(`Server is running on Port ${port}`));
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("DB is connected ✔"))
    .catch((err) => console.log(err));
};

// nomoex("mongodb://localhost:27017/NPM-NOMOEX");
