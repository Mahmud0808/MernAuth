import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import testRoutes from "./routes/test.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Create Express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // Parses URL-encoded data with the querystring library
app.use(bodyParser.json()); // Parses incoming requests with JSON payloads
app.use(cookieParser()); // Parses cookies attached to the client request object

// Define the path to the client directory
const __dirname = path.resolve();
const clientPath = path.join(__dirname, "../client");

// Serve static files from the client directory
app.use(express.static(clientPath));

// Serve the index.html file for any unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Routes
app.use("/", testRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
