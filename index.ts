import { Prisma as prisma } from "./db.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { Inject, Service } from "typedi";
import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import {
  Arg,
  Args,
  ArgsType,
  Authorized,
  buildSchema,
  Ctx,
  Field,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { resolvers, User } from "./prisma/generated/type-graphql";
import { PrismaClient, Prisma } from "@prisma/client";

(async function () {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  @ObjectType()
  class User {
    @Field()
    id: string;

    @Field()
    email: string;

    @Field()
    age?: number;

    @Field()
    kind: "NORMAL" | "ADMIN";
  }

  // interface MyContext {
  //   prisma?: PrismaClient<
  //     Prisma.PrismaClientOptions,
  //     never,
  //     Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  //   >;
  // }

  // const server = new ApolloServer<MyContext>({
  //   schema, // from previous step
  // });
  // const { url } = await startStandaloneServer(server, {
  //   context: async () => ({ prisma }),
  //   listen: { port: 4000 },
  // });
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log("Server is ready at " + url); //localhost:4000
})();
