import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TraineeFeedbackService } from 'src/app/Services/trainee-feedback.service';

@Component({
  selector: 'app-traineefeedback-crud',
  templateUrl: './traineefeedback-crud.component.html',
  styleUrls: ['./traineefeedback-crud.component.css']
})
export class TraineefeedbackCrudComponent implements OnInit {

  constructor(private traineeFeedbackservice: TraineeFeedbackService) { }

  CourseId = 2;
  TraineeId = 17;
  TrainerId = 7;
  Traineename = 'jack';

  TraineeFeedback: any = {
    id: 0,
    traineeId: this.TraineeId,
    trainerId: this.TrainerId,
    courseId: this.CourseId,
    statusId: 1,
    feedback: ''
  }
  ngOnInit(): void {
    this.setoption();
  }
  setoption(form?: NgForm) {
    if (this.TraineeFeedback.id != null) {
      this.getAllTraineeFeedback();
    }
  }
  getAllTraineeFeedback() {

    this.traineeFeedbackservice.getAllTraineeFeedbackById(13, 8).subscribe(res => {
      console.log(res)
      this.TraineeFeedback = res
    })
  }
  OnSubmit() {
    if (this.TraineeFeedback.id == 0) {
      console.log(this.TraineeFeedback)
      this.traineeFeedbackservice.postTraineeFeedback(this.TraineeFeedback).subscribe((res) => {
        console.log(res);
      })
    }
    else {
      console.log(this.TraineeFeedback)
      this.traineeFeedbackservice.putTraineeFeedback(this.TraineeFeedback).subscribe((res) => {
        console.log(res);
      })
    }
  }
}
