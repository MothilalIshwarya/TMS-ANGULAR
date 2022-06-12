import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/Services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private TopicService: TopicService) { }
  data: any;
  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics() {
    this.TopicService.getAllTopicByCourseId(5).
      subscribe(res => {
        console.log(res)
        this.data = res
      })
  }
}