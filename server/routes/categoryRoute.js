// Import necessary modules
const express = require("express");
const router = express.Router();

// Import your category controller (create a controller file if not already)
const categoryController = require("../controllers/categoryController");

// Define a route for categories
router.get("/categories", categoryController.getAllCategories);

// Add more routes as needed

// Export the router
module.exports = router;
