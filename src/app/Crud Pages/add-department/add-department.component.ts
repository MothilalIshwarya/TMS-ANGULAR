import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  role ="Co-Ordinator"

  constructor(private departmentservice:DepartmentService) { }
  public department:Department={
    id: 1,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
  }
 
  OnSubmit(){
    this.departmentservice.postdepartment(this.department).subscribe(
      (      res: Department)=>{
        console.log(res)
        this.department=res
      }
    )
  }
}
