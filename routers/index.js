const express = require("express");
// const ldb = require("./utilities/localdb.js");
const fs = require("fs");
const user = require("../mongoose/schema/user");
const router = express.Router();
const hostsettings = require("../mongoose/schema/hostconfiguration");
const monitors = require('../mongoose/schema/uptime_array')

router.get("/", async (req, res) => {
  
  const hostconfigs = await hostsettings.find()
  if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
    } else {
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        const monitor = await monitors.find()
        let mongodbusr = await user.findOne({ name: req.session.username });
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/index.ejs", {
            users: mongodbusr,
            fqdn: process.env.fqdn,
            monitor: monitor,
            req, 
            res
          });
          console.log(mongodbusr)
        } else {
          res.redirect('/login')
        }
      }
    }
});

router.get("/users", async (req, res) => {
  const hostconfigs = await hostsettings.find()
  const users = await user.find()

  if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/users.ejs", {
           user: users,
           fqdn: process.env.fqdn,
           userda: mongodbusr,
           users: mongodbusr,
           req, 
           res
          });
        } else {
          res.redirect('/login')
        }
      }
    }
});


router.get("/monitors", async (req, res) => {
  const hostconfigs = await hostsettings.find()
    if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/monitors.ejs", {
           fqdn: process.env.fqdn,
           userda: mongodbusr,
           users: mongodbusr,
           req, 
           res
          });
        } else {
          res.redirect('/login')
        }
      }
    }
});
router.get("/login", async (req, res) => {
  const hostconfigs = await hostsettings.find();
  if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
  } else {
    res.render("../views/login.ejs", {});
  }
});


router.get("/host", async (req, res) => {
  const hostconfigs = await hostsettings.find()
  const users = await user.find()

  if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/hostconfigurations.ejs", {
           user: users,
           fqdn: process.env.fqdn,
           userda: mongodbusr,
           users: mongodbusr,
           req, 
           res
           
          });
        } else {
          res.redirect('/login')
        }
      }
    }
});


router.get("/user/edit/:name", async (req, res) => {
  const hostconfigs = await hostsettings.find()
  const users = await user.find()

  if (hostconfigs.length == []) {
    res.render("../SmartWiz/index.ejs", {});
    } else {
      const mongodbusr = await user.findOne({ name: req.session.username });
      if (!req.session.not_listd) {
        res.redirect('/login')
      } else {
        if (req.session.not_listd != mongodbusr) {
          res.render("../views/users_edit.ejs", {
           user: users,
           fqdn: process.env.fqdn,
           userda: mongodbusr,
           users: mongodbusr,
           req, 
           res
          });
        } else {
          res.redirect('/login')
        }
      }
    }
});

module.exports = router;
