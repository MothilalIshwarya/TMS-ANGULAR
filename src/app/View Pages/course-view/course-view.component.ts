import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { DatashareService } from 'src/app/Services/datashare.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  constructor(private courseservice:CourseService,private route:Router,private datashare:DatashareService) { }
id:number;
data:any;
topicdata:any;
i:number=2;
  ngOnInit(): void {
    this.id=this.datashare.GetCourseData();
    this.getCourseby();
    this.gettopicbyCourse();

  }
  getCourseby(){
    this.courseservice.getCourseById(this.id).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  gettopicbyCourse(){
    this.courseservice.getTopicByCourseId(this.id).subscribe((res)=>{
      console.log(res);
      this.topicdata=res;
    });
  }
  pass(id:number){
    this.route.navigate(['/TopicView'])
    this.datashare.SetTopicData(id);
  }
}
