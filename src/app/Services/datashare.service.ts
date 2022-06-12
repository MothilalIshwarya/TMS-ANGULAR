import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
   CourseId:number;
   UserId:number;
   TopicId:number;
   RoleId:number;
  constructor() { }
  SetCourseData(value:number){
    this.CourseId=value;
  }
  GetCourseData(){
    return this.CourseId;
  }
  SetRoleData(value:number){
    this.RoleId=value;
  }
  GetRoleData(){
    return this.RoleId;
  }
  SetUserData(value:number){
    this.UserId=value;
  }
  GetUserData(){
    return this.UserId;
  }
  SetTopicData(value:number){
    this.TopicId=value;
  }
  GetTopicData(){
    return this.TopicId;
  }
}
