import { Course } from "./Course";
import { User } from "./User";

export interface TraineeFeedback {
    id: number;
    traineeId: number;
    trainerId: number;   
    courseId: number;  
    feedback: string;
    course: Course;
    trainee: User;
    trainer: User;
}