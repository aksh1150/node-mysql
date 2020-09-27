const db = mysql.createConnection({
  host: "localhost", // IP address of the server
  user: "root",
  password: "",
  database: "node-sql",
  port: "8080",
});
export default db;
