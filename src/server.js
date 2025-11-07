require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("E-Commerce CRUD API Runningggg 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
