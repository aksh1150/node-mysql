const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: "localhost", // IP address of the server
  user: "root",
  password: "",
  database: "node-sql",
  port: "8888",
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MYSQL Connected..");
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
