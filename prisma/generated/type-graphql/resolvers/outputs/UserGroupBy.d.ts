import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class UserGroupBy {
    id: string;
    email: string;
    age: number | null;
    kind: "NORMAL" | "ADMIN";
    _count: UserCountAggregate | null;
    _avg: UserAvgAggregate | null;
    _sum: UserSumAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
