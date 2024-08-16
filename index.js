import express from "express";

var app = express();

app.listen(8080, () => {
  console.log("Server Started on Port 8080");
});

app.get("/", (req, res) => {
  res.send("GET request for /");
});

app.get("/users", (req, res) => {
  res.send("Got a GET request for /users");
});

app.get("/products", (req, res) => {
  res.json([
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 120 },
  ]);
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get("/ab*cd", (req, res) => {
  res.send("Got a GET request for /ab*cd");
});
