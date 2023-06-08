"use strict";
var NestedEnumUserKindWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserKindWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserKindFilter_1 = require("../inputs/NestedEnumUserKindFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserKind_1 = require("../../enums/UserKind");
let NestedEnumUserKindWithAggregatesFilter = NestedEnumUserKindWithAggregatesFilter_1 = class NestedEnumUserKindWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserKind_1.UserKind, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserKindWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserKindWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserKind_1.UserKind], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserKindWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindWithAggregatesFilter)
], NestedEnumUserKindWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumUserKindWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindFilter_1.NestedEnumUserKindFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindFilter_1.NestedEnumUserKindFilter)
], NestedEnumUserKindWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserKindFilter_1.NestedEnumUserKindFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserKindFilter_1.NestedEnumUserKindFilter)
], NestedEnumUserKindWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumUserKindWithAggregatesFilter = NestedEnumUserKindWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserKindWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumUserKindWithAggregatesFilter);
exports.NestedEnumUserKindWithAggregatesFilter = NestedEnumUserKindWithAggregatesFilter;
