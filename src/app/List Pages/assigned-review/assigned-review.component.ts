import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-assigned-review',
  templateUrl: './assigned-review.component.html',
  styleUrls: ['./assigned-review.component.css']
})
export class AssignedReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  data: any
  ngOnInit(): void {
    this.getReviewByStatus()
  }

  getReviewByStatus() {
    this.reviewService.getReviewByStatus(3).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}