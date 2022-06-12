import { Component, OnInit } from '@angular/core';
import { TraineeFeedbackService } from 'src/app/Services/trainee-feedback.service';

@Component({
  selector: 'app-traineefeedback-view',
  templateUrl: './traineefeedback-view.component.html',
  styleUrls: ['./traineefeedback-view.component.css']
})
export class TraineefeedbackViewComponent implements OnInit {

  constructor(private traineeFeedbackService: TraineeFeedbackService) { }

  data: any

  ngOnInit(): void {
    this.getAllTraineeFeedback()
  }
  getAllTraineeFeedback() {
    this.traineeFeedbackService.getAllTraineeFeedbackById(13, 8).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
