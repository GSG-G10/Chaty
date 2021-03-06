const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
  user1: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  user2: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  lastUpdated: { type: Schema.Types.Date, default: Date.now },
});

const Chats = model('chats', chatSchema);

module.exports = Chats;
