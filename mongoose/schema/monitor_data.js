const mongoose = require('mongoose');

const monitordata = new mongoose.Schema(
      [
        {
          name: String,
          monitorurl: String,
          type: String,
          tsc: String, // Time Since Creation,
          uptime: Number,
          downtime: Number,
          tls: Boolean
        },
      ]
);

const monitor_data = mongoose.model('monitor_data', monitordata);

module.exports = monitor_data