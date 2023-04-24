import { Component } from '@angular/core';
import { EmpdataService } from '../empdata.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empdata:any[]=[];  
  constructor(emp:EmpdataService)
  {
      this.empdata = emp.emp_list
  }
  
}
