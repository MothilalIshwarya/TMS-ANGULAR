import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-completed-review',
  templateUrl: './completed-review.component.html',
  styleUrls: ['./completed-review.component.css']
})
export class CompletedReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  data: any
  ngOnInit(): void {
    this.GetReviewByStatus()

  }
  GetReviewByStatus() {
    this.reviewService.getReviewByStatus(1).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
