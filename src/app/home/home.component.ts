import { Component } from '@angular/core';
import { WorkleavesService } from '../workleaves.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  wl:any[]=[];  
  constructor(leaves:WorkleavesService)
  {
      this.wl = leaves.leaveslist;
  }
  url1:string="src/assets/graph.png";
}

