"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
(async function () {
    let Post = class Post {
    };
    __decorate([
        (0, type_graphql_1.Field)(() => type_graphql_1.ID),
        __metadata("design:type", String)
    ], Post.prototype, "_id", void 0);
    __decorate([
        (0, type_graphql_1.Field)({ nullable: false }),
        __metadata("design:type", String)
    ], Post.prototype, "username", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    Post = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Post);
    let NewPostInput = class NewPostInput {
    };
    __decorate([
        (0, type_graphql_1.Field)()
        // @MaxLength(30)
        ,
        __metadata("design:type", String)
    ], NewPostInput.prototype, "title", void 0);
    __decorate([
        (0, type_graphql_1.Field)({ nullable: true })
        // @Length(30, 255)
        ,
        __metadata("design:type", String)
    ], NewPostInput.prototype, "username", void 0);
    NewPostInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], NewPostInput);
    let PostArgs = class PostArgs {
        constructor() {
            this.skip = 0;
            this.take = 25;
        }
    };
    __decorate([
        (0, type_graphql_1.Field)((type) => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], PostArgs.prototype, "skip", void 0);
    __decorate([
        (0, type_graphql_1.Field)((type) => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], PostArgs.prototype, "take", void 0);
    PostArgs = __decorate([
        (0, type_graphql_1.ArgsType)()
    ], PostArgs);
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
