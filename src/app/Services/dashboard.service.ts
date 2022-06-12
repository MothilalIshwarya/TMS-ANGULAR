import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/User/user/Dashboard"
  getDashboard():Observable<any>{
    return this.http.get<any>(this.baseurl)
  }
  
  getUserCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetUserCount`)
  }

  getCourseCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetCourseCount`)
  }

  getReviewCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetReviewCount`)
  }

  getDepartmentCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetDepartmentCount`)
  }
}
