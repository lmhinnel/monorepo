const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/nyan", function (req, res) {
  Math.random() < 0.1
    ? res.send(`Congratulation, yu're Nyan ${req.query.name}.`)
    : res.send(`Sorry, yu're normal ${req.query.name}.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
