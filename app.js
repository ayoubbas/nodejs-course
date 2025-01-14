const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

const Mydata = require("./models/mydataSchema");

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

mongoose
  .connect(
    "mongodb+srv://hichamok147:OsGeMLMjjdspNoDO@cluster0.e0hqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  console.log(req.body);
  const mydata = new Mydata(req.body);
  mydata.save();
  res.redirect("/index.html");
});
