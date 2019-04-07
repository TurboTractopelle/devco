const express = require("express");
const mongoose = require("mongoose");

const app = express();

// db config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(db)
  .then(res => console.log(res))
  .catch(error => console.log(error));

app.get("/", (req, res) => res.send("hello wolrd"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
