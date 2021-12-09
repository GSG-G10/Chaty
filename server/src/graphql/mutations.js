const { GraphQLString, GraphQLId, GraphQLNonNull } = require('graphql');
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
      userName: { type: new GraphQLNonNull(GraphQLString) },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      phone: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => addUser(args),
  },
};

const ChatMutation = {
  userChats: {
    description: 'Fetch all chats for a specific user',
    type: ChatType,
    args: {
      user1: { type: GraphQLId },
      user2: { type: GraphQLId },
    },
    resolve: (parent, args) => createChat(args),
  },
};

const MessageMutation = {
  chatMessages: {
    description: 'Fetch messages for a specific chat',
    type: MessageType,
    args: {
      sender: { type: GraphQLId },
      reciever: { type: GraphQLId },
      chat: { type: GraphQLId },
      content: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => createMessage(args),
  },
};

module.exports = {
  UserMutation,
  ChatMutation,
  MessageMutation,
  name: 'Root mutation',
};
