import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseFeedbackService } from 'src/app/Services/course-feedback.service';

@Component({
  selector: 'app-coursefeedback-view',
  templateUrl: './coursefeedback-view.component.html',
  styleUrls: ['./coursefeedback-view.component.css']
})
export class CoursefeedbackViewComponent implements OnInit {

  constructor(private courseFeedbackService: CourseFeedbackService,private router :Router) { }

  data: any
  ngOnInit(): void {
    this.getAllFeedback()
  }
  getAllFeedback() {
    this.courseFeedbackService.getAllCourseFeedbackByID(1, 13).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
 gotoCreate(){
   this.router.navigateByUrl('../CourseFeedback');
 }

}
