// controllers/categoryController.js

// Import any necessary services or models
// const CategoryService = require('../services/categoryService');

// Define a function to get all categories
const getAllCategories = (req, res) => {
  // Replace this with your logic to fetch categories
  // Example using a mock response:
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
  ];

  res.json(categories);
};

// Export controller functions
module.exports = {
  getAllCategories,
  // Add more controller functions as needed
};
