import { MOMStatusDTO } from "./MOMStatusDTO";
import { ReviewDTO } from "./ReviewDTO";
import { User } from "./User";

export interface MOMDTO {
    id: number;
    reviewId: number;
    statusId: number;
    ownerId: number;
    agenda: string;
    meetingNotes: string;
    purposeOfMeeting: string;

    status:MOMStatusDTO;
    review:ReviewDTO;
    owner:User;
}