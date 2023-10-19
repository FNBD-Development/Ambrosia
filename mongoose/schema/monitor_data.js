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

module.exports = monitordata