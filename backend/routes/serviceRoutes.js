// routes/serviceRoutes.js
const express = require("express");
const Service = require("../models/Service");

const router = express.Router();

// ✅ Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: "Error fetching services" });
  }
});

// ✅ Add new service
router.post("/", async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const newService = new Service({ title, description, icon });
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(500).json({ message: "Error adding service" });
  }
});

module.exports = router;
