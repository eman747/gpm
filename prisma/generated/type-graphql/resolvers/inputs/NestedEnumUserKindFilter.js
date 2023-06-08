"use strict";
var NestedEnumUserKindFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserKindFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserKind_1 = require("../../enums/UserKind");
let NestedEnumUserKindFilter = NestedEnumUserKindFilter_1 = class NestedEnumUserKindFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserKind_1.UserKind, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserKindFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserKindFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserKindFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindFilter)
], NestedEnumUserKindFilter.prototype, "not", void 0);
NestedEnumUserKindFilter = NestedEnumUserKindFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserKindFilter", {
        isAbstract: true
    })
], NestedEnumUserKindFilter);
exports.NestedEnumUserKindFilter = NestedEnumUserKindFilter;
