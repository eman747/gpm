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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const db_1 = require("../db");
let CustomUserResolver = class CustomUserResolver {
    changeUserKind(where, kind) {
        console.log("Changing user kind", { where, kind });
        return db_1.Prisma.user.update({ where, data: { kind } });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.User),
    __param(0, (0, type_graphql_1.Arg)("where")),
    __param(1, (0, type_graphql_1.Arg)("kind")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.UserWhereUniqueInput, String]),
    __metadata("design:returntype", void 0)
], CustomUserResolver.prototype, "changeUserKind", null);
CustomUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CustomUserResolver);