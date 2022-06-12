import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { CourseService } from 'src/app/Services/course.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private CourseService:CourseService, private departmentservice:DepartmentService, private UserService : UserService) { }    
  department:any
  trainer:any
  Course:any={
    id:0,
    statusId:1,
    trainerId:7,
    departmentId:1,
    description:'Integration',
    name:'Integrating',
    duration:'4 hours',
    isDisabled:false
  }
  ngOnInit(): void {
    // this.OnSubmit();
    this.getalltrainer();
    this.getalldepartment();
  }
  OnSubmit(){
    console.log(this.Course)
    this.CourseService.postcourse(this.Course).subscribe((res)=>{
      console.log(res);
    })
 
  }
  getalltrainer() {
    this.UserService.getAllUsersByRole(3).subscribe(res=>{
    console.log(res);
    this.trainer=res;
    })
  }
  getalldepartment(){
    this.departmentservice.getAllDepartment().subscribe(res=>{
      console.log(res)
      this.department=res
  })
  }
}