const { User, Chat, Message } = require('../models');

const userQueries = {
  findUserByID: (id) => User.findById(id),
  findAllUsers: () => User.find(),
  findUserByEmail: (email) => User.findOne({ email }),
  addUser: ({ userName, firstName, lastName, phone, email }) =>
    User.create({ userName, firstName, lastName, phone, email }),
};

const chatQueries = {
  findChatByID: (id) => Chat.findById(id),
  findUserChats: (email) =>
    userQueries
      .findUserByEmail(email)
      .then((user) =>
        Chat.find({ $or: [{ user1: user._id }, { user2: user._id }] })
      ),
  createChat: ({ user1, user2 }) => Chat.create({ user1, user2 }),
};

const messageQueries = {
  findChatMessages: (chat) => Message.find({ chat }),
  createMessage: ({ sender, reciever, chat }) =>
    Message.create({ sender, reciever, chat }),
};

module.exports = { userQueries, chatQueries, messageQueries };
