import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { DatashareService } from 'src/app/Services/datashare.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
role = "Co-Ordinator"

  userdata: any;
  deptdata: any;
  coursedata: any;
  reviewdata: any;
  data: any;
  dashboarddata:any;
  base64String: any;
  roleid:number=1;
  
 constructor(
   private DashboardService: DashboardService,
   private userService: UserService,
   private sanitizer: DomSanitizer,
   private route:Router,
   private activedroute:ActivatedRoute,
   private datashare:DatashareService
    ) { }
parentpost:number=4;
  ngOnInit(): void {
    // this.getUserCount()
    // this.getCourseCount()
    // this.getReviewCount()
    // this.getDepartmentCount()
    this.getUserById();
    this.getDashboardCount();
  }
  getUserCount(){
    this.DashboardService.getUserCount().subscribe(res =>
      {
        console.log(res)
        this.userdata = res
      })
  }
  getCourseCount(){
    this.DashboardService.getCourseCount().subscribe(res =>
      {
        console.log(res)
        this.coursedata = res
      })
  }
  getReviewCount(){
    this.DashboardService.getReviewCount().subscribe(res =>
      {
        console.log(res)
        this.reviewdata = res
      })
  }
  getDepartmentCount(){
    this.DashboardService.getDepartmentCount().subscribe(res =>
      {
        console.log(res)
        this.deptdata = res
      })
  }
  getUserById() {
    this.userService.getUsersById(1).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  getDashboardCount(){
    this.DashboardService.getDashboard().subscribe((res)=>{
      console.log(res);
      this.dashboarddata=res;
    });
  }
  pass(roleid:number){
   this.datashare.SetRoleData(roleid);
  this.route.navigate(['/Userlist'])
   //this.parentpost.push(roleid);
   
   
  }
}
