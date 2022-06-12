import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/"

  userAuthorization(UserName: string, Password: string): Observable<any> {
    var data = {
      Email: UserName,
      Password: Password
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json-patch+json; charset=utf-8');
    return this.http.post(this.baseurl + `Login`, data);
  }

  IsloggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  getRole() {
    if (this.getToken != null) {
      var _token = this.getToken();
      var extract = _token.split('.')[1];
      console.log(extract)
      var _atobtoken = atob(extract);
      var _finaldata = JSON.parse(_atobtoken);
      return _finaldata.Role;
    } else {
      return '';
    }
  }
}
