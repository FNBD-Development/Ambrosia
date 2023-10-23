const express = require("express");
// const ldb = require("./utilities/localdb.js");
const fs = require("fs");
const user = require("../mongoose/schema/user");
const router = express.Router();
const hostsettings = require("../mongoose/schema/hostconfiguration");

router.get("/", async (req, res) => {
  const hostconfigs = await hostsettings.find();
    if (!hostconfigs[0].setuped) {
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

router.get("/i_hate_my_life", async (req, res) => {
  res.render("../views/index.ejs", {});

})

router.get("/login", async (req, res) => {
  const hostconfigs = await hostsettings.find();
  if (!hostconfigs[0].setuped) {
    res.render("../SmartWiz/index.ejs", {});
  } else {
    res.render("../views/login.ejs", {});
  }
});

module.exports = router;
