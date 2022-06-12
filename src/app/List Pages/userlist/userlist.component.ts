import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatashareService } from 'src/app/Services/datashare.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input("parentpost") childpost:number;
  constructor(private userService: UserService,private router:Router,private activatedRoute:ActivatedRoute,private datashare:DatashareService) { }

  data: any;

  role = "Co-Ordinator";
  option = "Trainer";
  roleid:any;
  value:number;

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((Params:any)=>{
    //   this.roleid=Params.data
    //   console.log(Params)
    this.value=this.datashare.GetRoleData();
     // console.log("child"+this.childpost);
    // });
    this.getUserByRole();
  }
  getUserByRole() {
    this.userService.getAllUsersByRoleId(this.value).subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }
  pass(id:number){
    this.router.navigate(['/UserProfile'])
    this.datashare.SetUserData(id);
  }
 
}