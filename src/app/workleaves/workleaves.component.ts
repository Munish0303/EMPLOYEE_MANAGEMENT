import { Component } from '@angular/core';
import { WorkleavesService } from '../workleaves.service';
@Component({
  selector: 'app-workleaves',
  templateUrl: './workleaves.component.html',
  styleUrls: ['./workleaves.component.css']
})
export class WorkleavesComponent 
{
  wl:any[]=[];  
  constructor(leaves:WorkleavesService)
  {
      this.wl = leaves.leaveslist;
  }
  f3(a : number){
    this.wl.splice(a,1);
  }


}
