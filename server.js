const express = require("express");
const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("This is the Home page.");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
