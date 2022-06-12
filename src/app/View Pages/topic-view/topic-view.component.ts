import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';
import { DatashareService } from 'src/app/Services/datashare.service';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {
data:any;
  constructor(private courseservice:CourseService,private route:Router,private datashare:DatashareService) { }
id:number;
  ngOnInit(): void {
    this.id=this.datashare.GetTopicData();
    this.getTopicId();
  }
  getTopicId(){
    this.courseservice.getTopicById(this.id).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
 
}
