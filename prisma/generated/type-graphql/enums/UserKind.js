"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserKind = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserKind;
(function (UserKind) {
    UserKind["NORMAL"] = "NORMAL";
    UserKind["ADMIN"] = "ADMIN";
})(UserKind = exports.UserKind || (exports.UserKind = {}));
TypeGraphQL.registerEnumType(UserKind, {
    name: "UserKind",
    description: undefined,
});
