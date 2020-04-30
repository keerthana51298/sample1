import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../employee1/employee1.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component  {
  text = "user page"; 
  users; 
  
  constructor(private userService:Employee1Service) { 
  this.users = this.userService.getUsers();
  }
}

