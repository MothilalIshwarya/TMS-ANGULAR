import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { CourseService } from 'src/app/Services/course.service';
import { DatashareService } from 'src/app/Services/datashare.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private CourseService: CourseService,private datashare:DatashareService,private route:Router) { }

  public data: CourseDTO[] = []
  ngOnInit(): void {
    this.getAllCourses()
  }
  getAllCourses() {
    this.CourseService.getAllCourses().
      subscribe(res => {
        console.log(res)
        this.data = res
      })
  }
  pass(id:number){
    this.route.navigate(['/CourseView'])
    this.datashare.SetCourseData(id);
  }
 
}
