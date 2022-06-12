import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MOMDTO } from '../Models/MOMDTO';

@Injectable({
  providedIn: 'root'
})
export class MOMService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/MOM/"
  getMOMById(id: number): Observable<MOMDTO[]> {
    return this.http.get<MOMDTO[]>(this.baseurl + `GetMOMById/${id}`)

  }
  getMOMByStatus(statusId: number): Observable<MOMDTO[]> {
    return this.http.get<MOMDTO[]>(this.baseurl + `GetMOMByStatus/${statusId}`)

  }
  CreateMOM(data: any): Observable<any> {

    return this.http.post<any>(this.baseurl + `Create`, data)
  }
}