import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from '../Models/Department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/Department/departments"
  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseurl)
  }
  postdepartment(data: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + `Create`, data)
  }
}

