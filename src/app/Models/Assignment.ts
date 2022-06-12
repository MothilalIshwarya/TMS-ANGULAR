import { AssignmentStatus } from "./AssignmentStatus";
import { Topic } from "./Topic";
import { User } from "./User";

export interface Assigment {
    id: number;
    topicId: number;
    statusId: number;
    ownerId: number;
    document: string;
    status: AssignmentStatus | null;
    topic: Topic | null;
    owner: User | null;
}