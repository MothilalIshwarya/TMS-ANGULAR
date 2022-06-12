import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReviewDTO } from '../Models/ReviewDTO';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/Review/"
  getReviewById(id: number): Observable<ReviewDTO[]> {
    return this.http.get<ReviewDTO[]>(this.baseurl + `GetReviewById/${id}`)
  }

  getReviewByStatus(statusId: number): Observable<ReviewDTO[]> {
    return this.http.get<ReviewDTO[]>(this.baseurl + `GetReviewByStatus/${statusId}`)
  }

  getAllDepartments() {
    let baseurl = "https://localhost:7161/api/Department/GetAllDepartments"
    return this.http.get(baseurl)
  }

  getAllReviewer(id: number): Observable<User[]> {
    let baseurl = "https://localhost:7161/User/"
    return this.http.get<User[]>(baseurl + `GetUsersByRole/${id}`)
  }

  getAllUser(did: number, rid: number): Observable<User[]> {
    let baseurl = "https://localhost:7161/User/"
    return this.http.get<User[]>(baseurl + `GetUsersByDeptandrole/${did},${rid}`)
  }

  postReview(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + 'Create', data)
  }

  putReview(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.baseurl + 'Update', data)
  }
}
