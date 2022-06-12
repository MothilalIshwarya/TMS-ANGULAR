import { AttendanceStatus } from "./AttendanceStatus";
import { Topic } from "./Topic";
import { User } from "./User";

export interface Attendance {
    id: number;
    topicId: number;
    statusId: number;
    ownerId: number;
    status: AttendanceStatus | null;
    topic: Topic | null;
    owner: User | null;
}