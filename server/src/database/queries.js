const { Users, Chats, Messages } = require('../models');

const userQueries = {
  findUserByID: (id) => Users.findById(id),
  findAllUsers: () => Users.find(),
  findUserByEmail: (email) => Users.findOne({ email }),
  addUser: ({ userName, firstName, lastName, phone, email }) =>
    Users.create({ userName, firstName, lastName, phone, email }),
};

const chatQueries = {
  findChatByID: (id) => Chats.findById(id),
  findUserChats: (email) =>
    userQueries
      .findUserByEmail(email)
      .then((user) =>
        chatQueries.find({ $or: [{ user1: user._id }, { user2: user._id }] })
      ),
  createChat: ({ user1, user2 }) => Chats.create({ user1, user2 }),
};

const messageQueries = {
  findChatMessages: (chat) => Messages.find({ chat }),
  createMessage: ({ sender, reciever, chat }) =>
    Messages.create({ sender, reciever, chat }),
};

module.exports = { userQueries, chatQueries, messageQueries };
