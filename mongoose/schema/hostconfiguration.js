const mongoose = require('mongoose');

const hostconfigs = new mongoose.Schema(
      [
        {
          name: String,
          license: String,
        },
      ]
);

const hostsettings = mongoose.model('hostconfiguration', hostconfigs);


module.exports = hostsettings