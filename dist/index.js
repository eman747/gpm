"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = require("./db.js");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("./prisma/generated/type-graphql");
(async function () {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: type_graphql_2.resolvers,
        validate: false,
    });
    const server = new server_1.ApolloServer({
        schema, // from previous step
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => ({ prisma: db_js_1.Prisma }),
        listen: { port: 4000 },
    });
    // const server = new ApolloServer({
    //   schema: buildSubgraphSchema(),
    // });
    // const { url } = await startStandaloneServer(server, {
    //   listen: { port: 4000 },
    // });
    console.log("Server is ready at " + url); //localhost:4000
})();
