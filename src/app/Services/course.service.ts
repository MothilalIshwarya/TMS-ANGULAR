import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../Models/Course';
import { CourseDTO } from '../Models/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // localurl: string;

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:5001/Course"

  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl)
  }

  gettopicdetailsbyid(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + `GetTopicById/${id}`)
  }

  postcourse(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + `Create`, data)
  }
  getAllUsersByRoleId(id: number): Observable<any> {
    return this.http.get<any>("https://localhost:5001/User/GetUsersByRole")
  }
  getCourseById(id:number):Observable<any>{
    return this.http.get<any>(this.baseurl+`/${id}`)
  }
  //https://localhost:5001/Course/1/topics
  getTopicByCourseId(id:number):Observable<any>{
    return this.http.get<any>(this.baseurl+`/${id}/topics`)
  }
  //https://localhost:5001/Course/topics/1
  getTopicById(id:number):Observable<any>{
    return this.http.get<any>(this.baseurl+`/topics/${id}`)
  }
}
