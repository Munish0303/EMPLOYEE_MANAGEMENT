import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService 
{
  emp_list:any[] = 
  [
    {id: 1,name: 'Max Verstappen',salary:0},
    {id: 2,name: 'Iman Gadhzi',salary:0},
    {id: 3,name: 'Samantha Woods',salary:0},
    {id: 4,name: 'Chris Hearn',salary:0},
    {id: 5,name: 'Shirly Smith',salary:0}
  ]
  constructor() { }
}
