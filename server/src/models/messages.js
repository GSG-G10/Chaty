const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'users' },
  reciever: { type: Schema.Types.ObjectId, ref: 'users' },
  chat: { type: Schema.Types.ObjectId, ref: 'chats' },
  sentAt: { type: 'Date', default: Date.now },
  seenAt: { type: 'Date' },
});

const Messages = model('messages', messageSchema);

module.exports = Messages;
