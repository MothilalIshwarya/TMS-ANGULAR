import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  role = "Co-Ordinator"
  constructor(private dservice: DepartmentService) { }
  data: any;
  ngOnInit(): void {
    this.GetallDepartment()
  }
  GetallDepartment() {
    this.dservice.getAllDepartment().subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}