import { number } from "prop-types";

const mongoose = require('mongoose');

const uptime_array = new mongoose.Schema(
      [
        {
          name: String,
          type: String,
          tsc: Number, // Time Since Creation,
          uptime: Number,
          downtime: Number
        },
      ]
);

module.exports = uptime_array