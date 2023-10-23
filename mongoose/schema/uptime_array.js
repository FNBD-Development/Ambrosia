const mongoose = require('mongoose');

const uptime_array = new mongoose.Schema(
      [
        {
          name: String,
          timestamp: Number,
          status: String,
          ping: Number
        },
      ]
);


const uptimearray = mongoose.model('uptimearray', uptime_array);
module.exports = uptimearray