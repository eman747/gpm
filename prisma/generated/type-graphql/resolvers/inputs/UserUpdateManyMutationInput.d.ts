import { EnumUserKindFieldUpdateOperationsInput } from "../inputs/EnumUserKindFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateManyMutationInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    age?: NullableIntFieldUpdateOperationsInput | undefined;
    kind?: EnumUserKindFieldUpdateOperationsInput | undefined;
}
