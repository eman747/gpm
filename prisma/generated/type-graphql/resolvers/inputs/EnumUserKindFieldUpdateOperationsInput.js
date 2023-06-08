"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserKindFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserKind_1 = require("../../enums/UserKind");
let EnumUserKindFieldUpdateOperationsInput = class EnumUserKindFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserKind_1.UserKind, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserKindFieldUpdateOperationsInput.prototype, "set", void 0);
EnumUserKindFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserKindFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumUserKindFieldUpdateOperationsInput);
exports.EnumUserKindFieldUpdateOperationsInput = EnumUserKindFieldUpdateOperationsInput;
