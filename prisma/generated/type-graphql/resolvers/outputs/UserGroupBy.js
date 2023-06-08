"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
const UserKind_1 = require("../../enums/UserKind");
let UserGroupBy = class UserGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserGroupBy.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserKind_1.UserKind, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserGroupBy.prototype, "kind", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserAvgAggregate_1.UserAvgAggregate)
], UserGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserSumAggregate_1.UserSumAggregate)
], UserGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserGroupBy", {
        isAbstract: true
    })
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
