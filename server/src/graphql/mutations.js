const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
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
  createChat: {
    description: 'Create new chat',
    type: ChatType,
    args: {
      user1: { type: GraphQLID },
      user2: { type: GraphQLID },
    },
    resolve: (parent, args) => createChat(args),
  },
};

const MessageMutation = {
  creataMessage: {
    description: 'create new message',
    type: MessageType,
    args: {
      sender: { type: GraphQLID },
      reciever: { type: GraphQLID },
      chat: { type: GraphQLID },
      content: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => createMessage(args),
  },
};

const RootMutation = new GraphQLObjectType({
  name: 'Mutataion',
  description: 'Root Mutation',
  fields: () => ({
    ...UserMutation,
    ...ChatMutation,
    ...MessageMutation,
  }),
});
module.exports = RootMutation;
