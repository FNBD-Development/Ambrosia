const express = require("express");
// const ldb = require("./utilities/localdb.js");
const fs = require("fs");
const user = require("../mongoose/schema/user");
const router = express.Router();
const hostsettings = require("../mongoose/schema/hostconfiguration");

router.get("/", async (req, res) => {
  const hostconfigs = await hostsettings.find()
    if (!hostconfigs[0].setuped ) {
      res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/index.ejs", {});
        } else {
          res.redirect('/login')
        }
      }
    }
});

router.get("/users", async (req, res) => {
  const hostconfigs = await hostsettings.find()
  const users = await user.find()
    if (!hostconfigs[0].setuped) {
      res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/users.ejs", {
           user: users
          });
        } else {
          res.redirect('/login')
        }
      }
    }
});
router.get("/login", async (req, res) => {
  const hostconfigs = await hostsettings.find();
  if (!hostconfigs[0].setuped) {
    res.render("../SmartWiz/index.ejs", {});
  } else {
    res.render("../views/login.ejs", {});
  }
});

module.exports = router;
