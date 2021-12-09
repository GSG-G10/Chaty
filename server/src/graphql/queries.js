const {
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
} = require('graphql');
const { UserType, ChatType, MessageType } = require('./types');
const {
  userQueries,
  chatQueries,
  messageQueries,
} = require('../database/queries');

const { findAllUsers } = userQueries;
const { findUserChats } = chatQueries;
const { findChatMessages } = messageQueries;

const UserQuery = {
  users: {
    description: 'Fetch all users',
    type: new GraphQLList(UserType),
    resolve: () => findAllUsers(),
  },
};

const ChatQuery = {
  userChats: {
    description: 'Fetch all chats for a specific user',
    type: new GraphQLList(ChatType),
    args: {
      email: { type: GraphQLString },
    },
    resolve: (parent, args) => findUserChats(args.email),
  },
};

const MessageQuery = {
  chatMessages: {
    description: 'Fetch messages for a specific chat',
    type: new GraphQLList(MessageType),
    args: {
      id: { type: GraphQLID },
    },
    resolve: (parent, args) => findChatMessages(args.id),
  },
};

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    ...UserQuery,
    ...ChatQuery,
    ...MessageQuery,
  }),
});

module.exports = RootQuery;
