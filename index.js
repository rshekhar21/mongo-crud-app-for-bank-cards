require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const router = require("./routes");
const log = console.log;
const port = process.env.PORT || 3000;
const cnstr = process.env.MDB_URI;
const app = express();

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/card", router);

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
app.get("/new", (req, res) => res.render("newcard"));
app.get("/view", (req, res) => res.render("viewcard"));
app.get("/list", (req, res) => res.render("cardlist"));

mongoose
  .connect(cnstr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () =>
      log("database connected,", `server http://localhost:${port}`)
    );
  })
  .catch((err) => log(err));
