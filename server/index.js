const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const result = require("./routes/result.js");

const PORT = 8898;

let app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "../build")));

app.use(cors());

app.use("/result", result);

app.get("/", (req, res) => {
  return res.end("Successfully Working API Server!");
});

app.use((req, res, next) => {
  let err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

app.listen(PORT);

module.exports = app;
