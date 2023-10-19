const express = require("express");
const ldb = require("./utilities/localdb.js");
const fs = require("fs");
import chalk from "chalk";
const router = express.Router();

router.get("/", async (req, res) => {
  fs.access("../local_db/setupd", fs.F_OK, (err) => {
    if (err) {
      res.render("/SmartWiz/index.ejs", {});
    } else {
      if (!ldb.config) {
        res.render("/main/index.ejs", {});
      }
    }
  });
});

module.exports = router;
