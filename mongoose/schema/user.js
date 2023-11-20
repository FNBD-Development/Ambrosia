const mongoose = require('mongoose');
const inbx = new mongoose.Schema({
  type: String,
  discription: String,
  closed: Boolean,
  cid: String
});
const user = new mongoose.Schema(
      [
        {
          name: String,
          role: String, // Admin/User
          password: String,
          avatar: String,
          inbox: [inbx],
          email: String
        },
      ]
);

const User = mongoose.model('User', user);

module.exports = User