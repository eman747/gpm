"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumUserKindFieldUpdateOperationsInput_1 = require("../inputs/EnumUserKindFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserKindFieldUpdateOperationsInput_1.EnumUserKindFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserKindFieldUpdateOperationsInput_1.EnumUserKindFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "kind", void 0);
UserUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyMutationInput", {
        isAbstract: true
    })
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
