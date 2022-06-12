import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-cancelled-review',
  templateUrl: './cancelled-review.component.html',
  styleUrls: ['./cancelled-review.component.css']
})
export class CancelledReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  data: any
  ngOnInit(): void {
    this.getReviewByStatus();
  }
  getReviewByStatus() {
    this.reviewService.getReviewByStatus(2).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
