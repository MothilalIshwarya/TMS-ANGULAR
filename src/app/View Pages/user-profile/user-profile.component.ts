import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DatashareService } from 'src/app/Services/datashare.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private datashare:DatashareService
  ) { }
  // private userId$: Observable<number> = this.activatedRoute.params.pipe(
  //   map((params: Params) => parseInt(params['id']))
  // )
  data: any;
  base64String: any;
  id:number;
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((data:Params)=>{
    //   this.data={
    //     id:data['id']
    //   };
      //this.getUserById['id']);
    //});
    this.id=this.datashare.GetUserData();
    this.getUserById();
  }
  getUserById() {
    this.userService.getUsersById(this.id).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}