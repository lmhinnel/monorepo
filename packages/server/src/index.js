const express = require("express");
const cors = require("cors");
const { RANDOM_MSGS } = require("./msg");

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

app.get("/chat", function (req, res) {
  const sz = req.query.size || 1;
  const msgs = [];
  for (let i = 0; i < sz; i++) {
    msgs.push(RANDOM_MSGS[Math.floor(Math.random() * 100)]);
  }
  res.send(msgs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
