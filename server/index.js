const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Import your custom route
const categoryRoute = require("./routes/categoryRoute");

// Use the route
app.use("/api", categoryRoute);
// Add more routes as needed

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
