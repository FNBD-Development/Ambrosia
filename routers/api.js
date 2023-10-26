import { password } from "bun";
const dayjs = require("dayjs");
const express = require("express");
const fs = require("fs");
const passwordgen = require("../utilities/password_gen");
const Jimp = require("jimp");
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
  try {
    if (req.session.username && req.session.role) {
      const rsu = req.session.username;
      const acc = await User.findOne({ name: rsu });

      if (acc.role === "Admin") {
        const usr = await User.findOne({ name: req.body.name });

        if (!usr) {
          let pass = passwordgen(6); // Make sure passwordgen function works
          const newusr = new User({
            name: req.body.name,
            role: req.body.role, // Assuming you intended to set role based on req.body
            password: pass,
            avatar: `${process.env.FQDN}/assets/default_pfp.jpeg`,
          });

          await newusr.save();

          res.json({
            title: "Success!",
            description: " Successfully created the user",
            icon: "success",
          });
        } else {
          res.json({
            icon: "error",
            title: "Oops!",
            description: "That username is already in use!",
          });
        }
      } else {
        res.json({
          icon: "error",
          title: "Oops!",
          description: "You don't have permission to do that!",
        });
      }
    } else {
      res.json({
        icon: "error",
        title: "Oops!",
        description: "Authentication error or missing session data!",
      });
    }
  } catch (error) {
    console.error("Error in /admin/user/add:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/login", async (req, res) => {
  const userdata = await User.findOne({ name: req.body.name });
  if (!userdata) {
    res.json({
      title: "No user",
      discription: "No user with that password and name",
      icon: "error",
    });
  } else {
    if (req.body.password == userdata.password) {
      req.session.username = userdata.name;
      req.session.not_listd = userdata.password;
      req.session.role = userdata.role;
      res.json({
        title: "Success",
        discription: "Logged in",
        icon: "success",
      });
    } else {
      res.json({
        title: "Incorrect Credentials",
        discription: "Invalid credentials",
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
    } else {
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

/* Shitty Code For Avatar */
router.get("/user/avatar/:btoa", async (req, res) => {
  res.sendFile("../avatars/"+btoa(username)+".png")
});

router.post("/edit_user", async (req, res) => {
  if (req.session.not_listd) {
    const { username, profile, password } = req.body;
    const userdata = await User.find()
    const changedata = User.findById(userdata._id);
    req.files.foo.mv("../avatars/"+btoa(username)+".png")
    /*if (req.files.avatar.mimetype != "image/png") {
    Jimp.read()
      .then((image) => {
        // Save the image as a PNG file
        const outputPath = "output_image.png"; // Replace with the desired output path
        return image.write(outputPath);
      })
      .then(() => {
        console.log("Image converted to PNG successfully.");
      })
      .catch((err) => {
        console.error("Error converting image:", err);
      });
  }*/
  changedata.set({
    name: username,
    role: req.session.role, // Admin/User
    password: password,
    avatar: `${process.env.FQDN}/api/user/avatar/` + btoa(username),
  });
  changedata.save()
  res.json({ title: "Success!", description: "Changed user", icon: "Success" })
  } else {
    res.json({ title: "Oops!", description: "Whaaa? What are you even doing?", icon: "error"})
  }
});

module.exports = router;
