import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpdataService } from '../empdata.service';
@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.css']
})
export class PayrollCalculatorComponent {
  myemp=""
  empsel="";
  salary=0;
  present:number=0;
  dailywage:number=0;
  bonus:number=0;
  empdata:any[]=[];  
  constructor(emp:EmpdataService)
  {
      this.empdata = emp.emp_list
  }
  Calpay(): void 
  {
    for (let i = 0; i < this.empdata.length; i++) 
    {
      if(this.empdata[i].name==this.myemp)
      {
        this.empdata[i].salary=(Number(this.present)*Number(this.dailywage))+Number(this.bonus);
        if(this.present<0 || this.dailywage <0 || this.bonus <0 || this.present>31)
        {
          this.empdata[i].salary=0
        }
        this.salary=this.empdata[i].salary;
      }
    }
    
	}

}
