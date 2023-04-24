import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkleavesService 
{
  leaveslist:any[] = 
  [
    {img: 'assets\memoji.jpg',name: 'Max Verstappen',reason:'Marriage',dept:'HR',dates:'21/04/23 - 25/04/23'},
    {img: 'assets\memoji3.jpeg',name: 'Samantha Woods',reason:'Travel',dept:'Marketing',dates:'22/04/23 - 24/04/23'},
  ]
  constructor() { }
}
