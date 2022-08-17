require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "It work" });
});

app.listen(process.env.PORT, () => {
  console.log("App Working at port 4000");
});
