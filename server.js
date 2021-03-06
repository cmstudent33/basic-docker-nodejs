"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

app.get("/greet", (req, res) => {
  const name = req.query.name;

  res.send(`Hello, ${name}!`);
});

app.get("/version", (req, res) => {
  res.send('7');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
