import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseFeedbackService } from 'src/app/Services/course-feedback.service';

@Component({
  selector: 'app-coursefeedback-crud',
  templateUrl: './coursefeedback-crud.component.html',
  styleUrls: ['./coursefeedback-crud.component.css']
})
export class CoursefeedbackCrudComponent implements OnInit {

  constructor(private courseFeedbackService:CourseFeedbackService,private route:Router) { }

  data:any
  CourseId=1;
  coursename='java';
  UserId=20;
  username='jack';
  CourseFeedback:any={
    id: 0,
    courseId: this.CourseId,
    ownerId: this.UserId,
    feedback: '',
    rating: ''
  }
  ngOnInit(): void {
    this.setoption();
    // this.getAllCourseFeedbackByID();
  }
  setoption(form?:NgForm){
    if(this.CourseFeedback.id!=null){
      this.getAllCourseFeedbackByID();
    }
  }
  getAllCourseFeedbackByID() {
    this.courseFeedbackService.getAllCourseFeedbackByID(1,13).subscribe(res => {
      console.log(res)
      this.CourseFeedback = res
    })
  }
  OnSubmit(){
    if(this.CourseFeedback.id==0){
      console.log(this.CourseFeedback)
      this.courseFeedbackService.postCourseFeedback(this.CourseFeedback).subscribe((res)=>{
        console.log(res);
      })
     
   }
    else{
      console.log(this.CourseFeedback)
      this.courseFeedbackService.putCourseFeedback(this.CourseFeedback).subscribe((res)=>{
        console.log(res);
      })
    }
  }
gotoView(){
  this.route.navigateByUrl('/ViewCourseFeedback');
}

}
