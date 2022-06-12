import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeFeedbackService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/FeedBack/"
  //https://localhost:5001/FeedBack/Trainee/Update
  getAllTraineeFeedbackById(cid: number, tid: number): Observable<any> {
    return this.http.get(this.baseurl + `GetTraineeFeedback/${cid},${tid}`)
  }
  postTraineeFeedback(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + 'Trainee/Create', data)
  }
  putTraineeFeedback(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.baseurl + 'Trainee/Update', data)
  }
}
