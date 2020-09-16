const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const api = require("./routes/api");
var fileRoutes = require("./routes/file");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use("/file", fileRoutes);

app.use("/api", api);

app.get("/", function(req, res) {
  res.send("hello from server");
});

app.post("/api/games", function(req, res) {
  console.log(req.body);
  res.status(200).send({ massage: "Data Recieved" });
});

app.listen(PORT, function() {
  console.log("server running on  localhost:" + PORT);
});
