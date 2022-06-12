import { CourseStatus } from "./CourseStatus";
import { User } from "./User";
import { Department } from "./Department";
import { Topic } from "./Topic";
import { CourseFeedback } from "./CourseFeedback";

export interface Course {
    id: number;
    statusId: number;
    trainerId: number;
    departmentId: number;
    name: string;
    duration: string;
    description: string;
    isDisabled: boolean;
    status: CourseStatus | null;
    trainer: User | null;
    department: Department | null;
    topics: Topic[] | null;
    trainees: User[] | null;
    feedbacks: CourseFeedback[] | null;
}