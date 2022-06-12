
import { ReviewStatusDTO } from "./ReviewStatusDTO";
import { User } from "./User";



export interface ReviewDTO {
    id: number;
    reviewerId: number;
    statusId: number;
    traineeId: number;
    reviewDate: string;
    reviewTime: string;
    mode: string;
    isDisabled: boolean;
    reviewer: User;
    trainee: User;
  
    status: ReviewStatusDTO;
}