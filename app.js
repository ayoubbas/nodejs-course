const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// const path = require("path");
// app.use(express.static(path.join(__dirname, "views")));

const Mydata = require("./models/mydataSchema");

app.get("/", (req, res) => {
  Mydata.find()
    .then((result) => {
      // console.log(result);

      res.render("index", { myTitle: "home page", arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/success", (req, res) => {
  res.send("<h1> the data send is successful </h1>");
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
  mydata
    .save()
    .then(() => {
      res.redirect("/success");
    })
    .catch((err) => {
      console.log(err);
    });
});

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// const express = require("express");
// const app = express();
// const port = 3000;
// const mongoose = require("mongoose");
// const path = require("path"); // Import the path module

// app.use(express.urlencoded({ extended: true }));

// // Serve static files from the "views" directory
// app.use(express.static(path.join(__dirname, "views")));

// const Mydata = require("./models/mydataSchema");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// app.listen(port, () => {
//   console.log(`http://localhost:${port}/`);
// });

// mongoose
//   .connect(
//     "mongodb+srv://hichamok147:OsGeMLMjjdspNoDO@cluster0.e0hqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then((res) => {})
//   .catch((err) => {
//     console.log(err);
//   });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   const mydata = new Mydata(req.body);
//   mydata
//     .save()
//     .then(() => {
//       // Redirect to the success.html file
//       res.redirect("/success.html");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
