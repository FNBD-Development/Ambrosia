const mongoose = require('mongoose');

const monitordata = new mongoose.Schema(
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

const monitor_data = mongoose.model('monitor_data', monitordata);

module.exports = monitor_data