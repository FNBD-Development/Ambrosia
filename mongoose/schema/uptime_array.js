const mongoose = require('mongoose');

const status_array = new mongoose.Schema({
  timestamp: Number,
  status: String,
  unix: String
})
const uptime_array = new mongoose.Schema(
      [
        {
          name: String,
          timestamp: Number,
          status: [status_array]
        },
      ]
);


const uptimearray = mongoose.model('uptimearray', uptime_array);
module.exports = uptimearray