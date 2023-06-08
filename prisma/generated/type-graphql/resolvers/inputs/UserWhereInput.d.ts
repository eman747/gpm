import { EnumUserKindFilter } from "../inputs/EnumUserKindFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    age?: IntNullableFilter | undefined;
    kind?: EnumUserKindFilter | undefined;
}
