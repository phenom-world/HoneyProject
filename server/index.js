import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors"; 
import  userRoutes from "./routes/user.js"

const app = express()
dotenv.config();

//Body Parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/user", userRoutes)


app.get("/", (req, res) => {
  res.send("Hello to Honey API");
});

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);