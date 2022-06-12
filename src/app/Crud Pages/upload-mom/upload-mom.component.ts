import { Component, OnInit } from '@angular/core';
import { MOMService } from 'src/app/Services/mom.service';

@Component({
  selector: 'app-upload-mom',
  templateUrl: './upload-mom.component.html',
  styleUrls: ['./upload-mom.component.css']
})
export class UploadMOMComponent implements OnInit {

  ReviewId = 14;
  reviewername = 'Jack';
  reviewdate = '12/02/2022';
  reviewtime = '4:30 PM';
  reviewmode = 'Online';
  OwnerId = 3;
  StatusId = 1;

  constructor(private momService: MOMService) { }

  mom: any = {
    id: 0,
    reviewId: this.ReviewId,
    statusId: this.StatusId,
    ownerId: this.OwnerId,
    agenda: '',
    meetingNotes: '',
    purposeOfMeeting: '',
  };

  ngOnInit(): void { }

  OnSubmit() {
    console.log(this.mom)
    this.momService.CreateMOM(this.mom).subscribe((res) => {
      console.log(res);
    })
  }
}