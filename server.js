require("dotenv").config();

const { Pool } = require("pg");
const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.PORTPG
});

app.get("/", (req, res) => {
  pool.query("SELECT * from construction_sites", (err, results) => {
    if (err) {
      res.status(500).send("Vous n'êtes pas au bon endroit !");
    } else {
      res.redirect("/api/v1/");
    }
  });
});

app.get("/api/v1", (req, res) => {
  pool.query("SELECT * from construction_sites", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(results);
      res.send(results.rows);
    }
  });
});

app.post("/api/v1/construction_sites", (req, res) => {
  const infos = req.body;
  console.log(infos);
  pool.query(
    "INSERT INTO construction_sites (name,coords) VALUES ($1, $2)",
    [infos.name, infos.coords],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(results);
        res.send(results);
      }
    }
  );
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
