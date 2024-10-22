const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5001;

// Middleware
app.use(cors()); // Enable CORS for your React app
app.use(express.json()); // Parse JSON body

// Handle POST request to save data
app.post("/save", (req, res) => {
  const { name, preference } = req.body;
  const dataToSave = `Name: ${name}, Preference: ${preference}, Timestamp: ${new Date().toISOString()}\n`;

  // Define the path for the text file
  const filePath = path.join(__dirname, "output", "log.txt");

  // Append the data to the text file
  fs.appendFile(filePath, dataToSave, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error saving data");
    }
    res.status(200).send("Data saved successfully!");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
