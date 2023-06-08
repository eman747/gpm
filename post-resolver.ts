import { Prisma } from "./db.js";
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

(async function () {
  @ObjectType()
  class Post {
    @Field(() => ID)
    _id: string;

    @Field({ nullable: false })
    username: string;

    @Field()
    title: string;
  }

  @InputType()
  class NewPostInput {
    @Field()
    // @MaxLength(30)
    title: string;

    @Field({ nullable: true })
    // @Length(30, 255)
    username: string;
  }

  @ArgsType()
  class PostArgs {
    @Field((type) => Int)
    skip: number = 0;

    @Field((type) => Int)
    take: number = 25;
  }

  // @Service()
  // export class PostService {
  //   @Inject("SAMPLE_POSTS")
  //   private readonly items: Post[],

  //   async findAll() {
  //     return this.items;
  //   }

  //   async addNew(data) {
  //     return this.items.push(data);
  //   }
  // }
  //   @Service()
  //   @Resolver(of => Post)
  //   class PostResolver {
  //     constructor(private postService: PostService) {}

  //     @Query((returns) => [Post])
  //     recipes(@Args() { skip, take }: PostArgs) {
  //       return this.postService.findAll();
  //     }

  //     @Mutation((returns) => Post)
  //     @Authorized()
  //     createPost(
  //       @Arg("newPostData") newPostData: NewPostInput
  //       // @Ctx("user") user: User
  //     ): Promise<Post> {
  //       return this.postService.addNew({ data: newPostData });
  //     }
  //   }

  //   const schema = await buildSchema({
  //     resolvers: [PostResolver],
  //   });

  //   const server = new ApolloServer({
  //     schema: buildSubgraphSchema(schema),
  //   });

  //   const { url } = await startStandaloneServer(server, {
  //     listen: { port: 4000 },
  //   });
  //   console.log("Server is ready at " + url); //localhost:4000
})();
