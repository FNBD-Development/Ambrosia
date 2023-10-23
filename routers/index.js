const express = require("express");
// import chalk from "chalk";
// const ldb = require("./utilities/localdb.js");
const fs = require("fs");
const user = require("../mongoose/schema/user");
const router = express.Router();

router.get("/", async (req, res) => {
  if (fs.existsSync("../local_db/setupd")) {
    res.render("../SmartWiz/index.ejs", {});
  } else {
    const mongodbusr = await user.findOne(req.session.username);
    if (!req.session.not_listd) {
      res.render("../views/errors/duckrender403.ejs", {});
    } else {
      if (req.session.not_listd != mongodbusr) {
        res.render("../views/index.ejs", {});
      } else {
        res.render("../views/errors/duckrender403.ejs", {});
      }
    }
  }
});

router.get("/login", async (req, res) => {
  if (fs.existsSync("../local_db/setupd")) {
    res.render("../SmartWiz/index.ejs", {});
  } else {
    res.render("../views/login.ejs", {});
  }
});

module.exports = router;
