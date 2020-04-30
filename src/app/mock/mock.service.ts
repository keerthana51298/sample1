import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  getUsers(): Array<{}> { 
    return [ 
      { 
        employeeName: 'keerthana', 
        employeeLocation: 'Chennai', 
        employeePhone: '8248521635', 
        employeeBackground:'IT'
      }
    ]
  }

}
