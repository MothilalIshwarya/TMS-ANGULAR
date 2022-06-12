import { Course } from "./Course";
import { Assigment } from "./Assignment";
import { Attendance } from "./Attendance";

export interface Topic {
    id: number;
    courseId: number;
    name: string;
    duration: string;
    context: string;
    isDisabled: boolean;
    course: Course;
    attendances: Attendance[];
    assigments: Assigment[];

}