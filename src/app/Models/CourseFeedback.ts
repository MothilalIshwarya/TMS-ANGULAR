
import { Course } from "./Course";
import { User } from "./User";

export interface CourseFeedback {
    id: number;
    courseId: number;
    ownerId: number;
    feddback: string;
    rating: number;
    course: Course ;
    owner: User;
}