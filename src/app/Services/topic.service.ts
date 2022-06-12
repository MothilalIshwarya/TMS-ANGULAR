import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Topic } from '../Models/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/"
  getAllTopicByCourseId(id: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseurl + `Course/GetAllTopicsByCourseId/${id}`)
  }
}
