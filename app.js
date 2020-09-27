const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.HOST, // IP address of the server
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory)); // to use all sttics file like css and JS by server use this line
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "hbs");

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MYSQL Connected..");
  }
});

// Define Routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
