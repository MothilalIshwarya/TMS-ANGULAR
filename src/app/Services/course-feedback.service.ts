import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CourseFeedbackService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/FeedBack/"
  //https://localhost:5001/FeedBack/course
  //https://localhost:5001/FeedBack/course/feedback
  //https://localhost:5001/FeedBack/course/feedback
  getAllCourseFeedbackByID(cid: number,oid:number): Observable<any> {
    return this.http.get(this.baseurl + `course/${cid},${oid}`)
  }
  postCourseFeedback(data: any): Observable<any> {
    const headers = new Headers();
    //https://localhost:5001/Feedback/Course/Create
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + 'course/feedback', data)
  }
  putCourseFeedback(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.baseurl + 'course/feedback', data)
  }

}
