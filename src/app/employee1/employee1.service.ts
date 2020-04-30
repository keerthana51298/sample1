import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  constructor() { } 
  getUsers(): Array<{}> { 
    return [ 
      { 
      employeeName: 'keerthana', 
      employeeLocation: 'Chennai', 
      employeePhone: '9856787345', 
      employeeBackground:'IT'
    }, 
    { 
      employeeName: 'Riya', 
      employeeLocation: 'Chennai', 
      employeePhone: '9856787345', 
      employeeBackground:'Cse'
  }, 
  { 
    employeeName: 'Amith', 
    employeeLocation: 'Mumbai', 
    employeePhone: '9856787345', 
    employeeBackground:'Ece'
}, 
{ 
  employeeName: 'Kishore', 
  employeeLocation: 'Hyderabad', 
  employeePhone: '9884485993', 
  employeeBackground:'Mech'
},
    ];
  }

}