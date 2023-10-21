const express = require("express");
// import chalk from "chalk";
// const ldb = require("./utilities/localdb.js");
const fs = require("fs");
const router = express.Router();

router.get("/", async (req, res) => {
  fs.access("../local_db/setupd", fs.F_OK, (err) => {
    if (err) {
      res.render("../SmartWiz/index.ejs", {});
    } else {
      res.render("../views/main/index.ejs", {});
    }
  });
});



module.exports = router;
