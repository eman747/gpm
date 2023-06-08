import { Arg, Mutation, Resolver } from "type-graphql";
import {
  User,
  UserWhereUniqueInput,
  UserKind,
} from "../prisma/generated/type-graphql";
import { Prisma } from "../db";

@Resolver()
class CustomUserResolver {
  @Mutation(() => User)
  changeUserKind(
    @Arg("where") where: UserWhereUniqueInput,
    @Arg("kind") kind: UserKind
  ) {
    console.log("Changing user kind", { where, kind });
    return Prisma.user.update({ where, data: { kind } });
  }
}
