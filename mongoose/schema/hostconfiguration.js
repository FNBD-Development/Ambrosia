const mongoose = require('mongoose');

const hostconfigs = new mongoose.Schema(
      [
        {
          name: String,
          license: String,
          setuped: Boolean,
          smtp: Boolean,
          smtp_host: String,
          smtp_pass: String,
          smtp_user: String,
          smtp_port: Number
        },
      ]
);

const hostsettings = mongoose.model('hostconfiguration', hostconfigs);


module.exports = hostsettings