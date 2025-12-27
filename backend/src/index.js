const express = require('express');
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const mongoose = require('mongoose');
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();  

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api/admin/auth", authRouter)
app.use("/api/admin/user", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});