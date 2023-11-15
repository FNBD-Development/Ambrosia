const mongoose = require('mongoose');

const status_array = new mongoose.Schema({
  status: Boolean,
  ping: Number,
  unix: String
})
const uptime_array = new mongoose.Schema(
      [
        { 
          name: String,
          data: [status_array]
        },
      ]
);


const uptimearray = mongoose.model('uptimearray', uptime_array);
module.exports = uptimearray