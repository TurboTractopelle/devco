const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello wolrd"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
