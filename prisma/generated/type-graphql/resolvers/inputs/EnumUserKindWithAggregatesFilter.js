"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserKindWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserKindFilter_1 = require("../inputs/NestedEnumUserKindFilter");
const NestedEnumUserKindWithAggregatesFilter_1 = require("../inputs/NestedEnumUserKindWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserKind_1 = require("../../enums/UserKind");
let EnumUserKindWithAggregatesFilter = class EnumUserKindWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserKind_1.UserKind, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserKindWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserKindWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserKindWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindWithAggregatesFilter_1.NestedEnumUserKindWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindWithAggregatesFilter_1.NestedEnumUserKindWithAggregatesFilter)
], EnumUserKindWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumUserKindWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindFilter_1.NestedEnumUserKindFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindFilter_1.NestedEnumUserKindFilter)
], EnumUserKindWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindFilter_1.NestedEnumUserKindFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindFilter_1.NestedEnumUserKindFilter)
], EnumUserKindWithAggregatesFilter.prototype, "_max", void 0);
EnumUserKindWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserKindWithAggregatesFilter", {
        isAbstract: true
    })
], EnumUserKindWithAggregatesFilter);
exports.EnumUserKindWithAggregatesFilter = EnumUserKindWithAggregatesFilter;
