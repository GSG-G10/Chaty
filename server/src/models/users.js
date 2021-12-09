const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: { type: 'String', required: true },
  firstName: { type: 'String' },
  lastName: { type: 'String' },
  phone: { type: 'Number', required: true },
  email: { type: 'String', required: true, unique: true },
  active: { type: 'Boolean' },
  lastSeen: { type: 'Date', default: Date.now },
});

const Users = model('users', userSchema);

module.exports = Users;
