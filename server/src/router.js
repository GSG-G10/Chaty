const router = require('express').Router();
const GraphQLServer = require('./graphql');

router.use('/graphql', GraphQLServer);

module.exports = router;
