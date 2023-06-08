import { NestedEnumUserKindFilter } from "../inputs/NestedEnumUserKindFilter";
import { NestedEnumUserKindWithAggregatesFilter } from "../inputs/NestedEnumUserKindWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumUserKindWithAggregatesFilter {
    equals?: "NORMAL" | "ADMIN" | undefined;
    in?: Array<"NORMAL" | "ADMIN"> | undefined;
    notIn?: Array<"NORMAL" | "ADMIN"> | undefined;
    not?: NestedEnumUserKindWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumUserKindFilter | undefined;
    _max?: NestedEnumUserKindFilter | undefined;
}
