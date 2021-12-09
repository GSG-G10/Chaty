const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const { userQueries, chatQueries } = require('../database/queries');

const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'user type',
  fields: () => ({
    _id: { type: GraphQLID },
    userName: { type: GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phone: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    active: { type: GraphQLBoolean },
    lastSeen: { type: GraphQLString },
  }),
});

const ChatType = new GraphQLObjectType({
  name: 'user',
  description: 'user type',
  fields: () => ({
    _id: { type: GraphQLID },
    user1: {
      type: GraphQLNonNull(UserType),
      resolve: (parent) => userQueries.findUserByID(parent.user1._id),
    },
    user2: {
      type: GraphQLNonNull(UserType),
      resolve: (parent) => userQueries.findUserByID(parent.user2._id),
    },
    lastUpdated: { type: GraphQLString },
  }),
});

const MessageType = new GraphQLObjectType({
  name: 'user',
  description: 'user type',
  fields: () => ({
    _id: { type: GraphQLID },
    sender: {
      type: GraphQLNonNull(UserType),
      resolve: (parent) => userQueries.findUserByID(parent.sender._id),
    },
    reciever: {
      type: GraphQLNonNull(UserType),
      resolve: (parent) => userQueries.findUserByID(parent.reciever._id),
    },
    chat: {
      type: GraphQLNonNull(ChatType),
      resolve: (parent) => chatQueries.findChatByID(parent.chat._id),
    },
    content: { type: GraphQLNonNull(GraphQLString) },
    sentAt: { type: GraphQLString },
    seenAt: { type: GraphQLString },
  }),
});

module.exports = { UserType, ChatType, MessageType };
