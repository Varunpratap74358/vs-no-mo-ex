import mongoose from "mongoose";
import cors from "cors";
import express from "express";

const app = express();

export const nomoex = (mongoUrl, corsOrigin = true) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: corsOrigin,
      methods: ["GET", "PUT", "POST", "DELETE"],
      credentials: true,
    })
  );
  
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("DB is connected ✔"))
    .catch((err) => console.log(err));
};


// app.listen(5200, () => console.log(`Server is running on Port ${5200}`));