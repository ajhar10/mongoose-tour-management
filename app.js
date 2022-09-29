const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//routes
const tourRoute = require("./routes/tour.route");
app.use("/api/", tourRoute);

app.get("/", (req, res) => {
  res.send("The Port is Working ??Y");
});

app.all("*", (req, res) => {
  res.send("Route Not Found");
});

module.exports = app;
