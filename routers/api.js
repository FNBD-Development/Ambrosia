import { password } from "bun";
const dayjs = require("dayjs");
const express = require("express");
const fs  = require('fs')
//import chalk from "chalk";

/* Schemas */
const monitordat = require("../mongoose/schema/monitor_data.js");
const UptimeArray = require("../mongoose/schema/uptime_array");
const User = require("../mongoose/schema/user");
const hostsettings = require("../mongoose/schema/hostconfiguration");
// const ldb = require('../utilities/localdb.js');

const router = express.Router();

router.post("/:name/info", async (req, res) => {
  monitordat.find({ name: req.params.name }, (err, MD) => {
    if (err) {
      console.error("error:", err);
    } else {
      res.json(MD);
    }
  });
});

router.post("/:name/history", async (req, res) => {
  UptimeArray.find({ name: req.params.name }, (err, monitorData) => {
    res.json(monitorData);
  });
});

router.post("/admin/monitor/add", async (req, res) => {
  const ua = new UptimeArray({
    name: req.body.name,
    timestamp: Math.floor(Date.now() / 1000),
    status: "Unknown",
    ping: 0,
  });
  const md = new monitordat({
    name: req.body.name,
    type: req.body.type, // HTTP, TCP, UDP
    tsc: dayjs.format("MMMM D, YYYY h:mm A"), // Time Since Creation,
    uptime: 0, // HOW THE FUCK DO I CALCULATE THAT... Wait i am just stupid
    downtime: 0, // 0 Cause no data? https://a.pinatafarm.com/320x349/4889604c7b/megamind-no-b.jpg
  });
  ua.save();
  md.save();
  res.json({
    message: "Success! Successfully created the monitor",
    title: "Success",
    icon: "success",
  });
});

router.post("/:name/history", async (req, res) => {
  UptimeArray.find({ name: req.params.name }, (err, monitorData) => {
    res.json(monitorData);
  });
});

router.post("/admin/user/add", async (req, res) => {
  User.findOne({ name: req.session.username }, (err, userdata) => {
    if (!err && userdata) {
      if (userdata.role !== "Admin") {
        res.json({
          title: "Forbidden 403",
          description: "You are unable to change/add a user",
          icon: "error",
        });
      } else {
        // Check if the username is already used
        User.findOne({ name: req.body.name }, (err, existingUser) => {
          if (err) {
            res.json({
              title: "Error",
              description:
                "An error occurred while checking for existing users",
              icon: "error",
            });
          } else if (existingUser) {
            res.json({
              title: "Username Taken",
              description: "The username is already in use",
              icon: "error",
            });
          } else {
            // Create a new user if the username is not already used
            const newUser = new User({
              name: req.body.name,
              role: req.body.role,
              password: password.hash(req.body.password, "bcrypt"),
            });
            newUser.save();

            res.json({
              title: "Success!",
              description: "Successfully created a new user",
              icon: "success",
            });
          }
        });
      }
    } else {
      res.json({
        title: "Error",
        description: "An error occurred while checking user permissions",
        icon: "error",
      });
    }
  });
});

router.post("/login", async (req, res) => {
  const userdata =  User.findOne({ name: req.body.name });
  if (!userdata) {
    res.json({
      title: "No user",
      discription: "No user with that password and name",
      icon: "error",
    });
  } else {
    if (req.body.password == userdata.password) {
      req.session.username = req.body.username;
      req.session.not_listd = userdata.password;
      req.session.role = userdata.role;
      res.json({
        title: "Success",
        discription: "Logged in",
        icon: "success",
      });
    } else {
      res.json({
        title: "No user",
        discription: "No user with that password and name",
        icon: "error",
      });
    }
  }
});

router.post("/smartwiz/setup", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    role: "Admin",
    password: req.body.password,
  });
  const hostconfis = new hostsettings({
    name: "Ambrosia",
    license: "Not Implemented",
    setuped: true,
  });
  

  fs.writeFile("../local_db/setupd", "Duck", (err) => {
    if (err) {
      res.json({
        title: "Error!",
        description: "Error marking setup is completed",
        icon: "success",
      });
    }else{
      console.log(`File  has been created with no data.`);
    }
  });
  newUser.save();
  hostconfis.save();
  res.json({
    title: "Success!",
    description: "Successfully created a new user",
    icon: "success",
  });
});

module.exports = router;
