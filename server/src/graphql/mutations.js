const {
  GraphQLList,
  GraphQLString,
  GraphQLId,
  GraphQLNonNull,
} = require('graphql');
const { UserType, ChatType, MessageType } = require('./types');
const {
  userQueries,
  chatQueries,
  messageQueries,
} = require('../database/queries');

const { addUser } = userQueries;
const { createChat } = chatQueries;
const { createMessage } = messageQueries;

const UserMutation = {
  addUser: {
    description: 'Add new user',
    type: UserType,
    args: {
      userName: { type: GraphQLNonNull(GraphQLString) },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      phone: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => addUser(args),
  },
};

const ChatMutation = {
  userChats: {
    description: 'Fetch all chats for a specific user',
    type: ChatType,
    args: {
      user1: { type: GraphQLNonNull(GraphQLId) },
      user2: { type: GraphQLNonNull(GraphQLId) },
    },
    resolve: (parent, args) => createChat(args),
  },
};

const MessageMutation = {
  chatMessages: {
    description: 'Fetch messages for a specific chat',
    type: new GraphQLList(MessageType),
    args: {
      sender: { type: GraphQLNonNull(GraphQLId) },
      reciever: { type: GraphQLNonNull(GraphQLId) },
      chat: { type: GraphQLNonNull(GraphQLId) },
      content: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => createMessage(args),
  },
};

module.exports = { UserMutation, ChatMutation, MessageMutation };
