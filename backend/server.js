// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// // Routes
// const bookingRoutes = require("./routes/bookingRoutes");
// const updateRoutes = require("./routes/updateRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
// const authRoutes = require("./routes/authRoutes");
// const roomRoutes = require("./routes/roomRoutes");
// const feedbackRoutes = require("./routes/feedbackRoutes");


// const app = express();

// //  JSON limit increase for Base64 images
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(cors());

// // Secret key
// const SECRET_KEY = "mysecretkey123"; // isko .env file me rakho

// // Register routes
// app.use("/api/auth", authRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/updates", updateRoutes);
// app.use("/api/rooms", roomRoutes);
// app.use("/api/feedback", feedbackRoutes);





// //  Admin Schema & Model

// const adminSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   name: String,
// });
// const Admin = mongoose.model("admins", adminSchema);


// //  Login Route

// app.post("/api/auth/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin || admin.password !== password) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     //  Token generate
//     const token = jwt.sign({ id: admin._id, email: admin.email }, SECRET_KEY, { expiresIn: "1h" });

//     res.json({
//       success: true,
//       message: "Login successful",
//       token,
//       name: admin.name,
//       email: admin.email,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });


// //  Middleware to verify token

// function verifyToken(req, res, next) {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(403).json({ message: "No token provided" });
//   }
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// }


// //  Dashboard Route

// app.get("/api/auth/dashboard", verifyToken, async (req, res) => {
//   try {
//     const admin = await Admin.findById(req.user.id);
//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }
//     res.json({
//       success: true,
//       message: "Welcome to Dashboard",
//       user: { id: admin._id, name: admin.name, email: admin.email },
//     });
//   } catch (error) {
//     console.error("Dashboard error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ------------------------
// //  Test Route
// // ------------------------
// app.get("/", (req, res) => {
//   res.send("Hotel Management Backend Running 🚀");
// });

// // ------------------------
// //  DB Connect & Start Server
// // ------------------------
// mongoose
//   .connect("mongodb://localhost:27017/GrandSuite")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log(err));

// app.listen(5000, () => {
//   console.log("✅ Server running on port 5000");
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Routes
const bookingRoutes = require("./routes/bookingRoutes");
const updateRoutes = require("./routes/updateRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes"); // ✅ add this

const app = express();

// ✅ JSON limit increase for Base64 images
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

// Secret key
const SECRET_KEY = "mysecretkey123"; // ✅ move to .env later

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/updates", updateRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/feedback", feedbackRoutes);

// ------------------------
//  Admin Schema & Model
// ------------------------
const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});
const Admin = mongoose.model("admins", adminSchema);

// ------------------------
//  Login Route
// ------------------------
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // ✅ Token generate
    const token = jwt.sign({ id: admin._id, email: admin.email }, SECRET_KEY, { expiresIn: "1h" });

    res.json({
      success: true,
      message: "Login successful",
      token,
      name: admin.name,
      email: admin.email,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------
//  Middleware to verify token
// ------------------------
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// ------------------------
//  Dashboard Route
// ------------------------
app.get("/api/auth/dashboard", verifyToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json({
      success: true,
      message: "Welcome to Dashboard",
      user: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------------
//  Test Route
// ------------------------
app.get("/", (req, res) => {
  res.send("Hotel Management Backend Running 🚀");
});

// ------------------------
//  DB Connect & Start Server
// ------------------------
mongoose
  .connect("mongodb://localhost:27017/GrandSuite")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
