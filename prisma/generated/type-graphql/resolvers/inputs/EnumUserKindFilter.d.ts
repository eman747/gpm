import { NestedEnumUserKindFilter } from "../inputs/NestedEnumUserKindFilter";
export declare class EnumUserKindFilter {
    equals?: "NORMAL" | "ADMIN" | undefined;
    in?: Array<"NORMAL" | "ADMIN"> | undefined;
    notIn?: Array<"NORMAL" | "ADMIN"> | undefined;
    not?: NestedEnumUserKindFilter | undefined;
}
