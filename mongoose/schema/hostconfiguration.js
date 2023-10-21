const mongoose = require('mongoose');

const hostconfigs = new mongoose.Schema(
      [
        {
          name: String,
          license: String,
        },
      ]
);

module.exports = hostconfigs