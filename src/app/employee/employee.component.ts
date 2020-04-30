import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  text='employee contact';
  contactForm:FormGroup;
  contact={
    firstname:'',
    lastname:'',
    salary:'',
    street1:'',
    street2:'',
    location:''

  };
  submitted=false;
  constructor() {
    this.createForm();
   }
 createForm():void{
   this.contactForm=new FormGroup({
     'firstname':new FormControl(this.contact.firstname,[
       Validators.required,
       Validators.minLength(4)
     ]),
     'lastname':new FormControl(this.contact.lastname,[
      Validators.required,
      Validators.minLength(4)
    ]),
    'salary':new FormControl(this.contact.salary,[
      Validators.required,
    ]),
    'street1':new FormControl(this.contact.street1,[
      Validators.required,
    ]),
    'street2':new FormControl(this.contact.street2,[
      Validators.required,
    ]),
    'location':new FormControl(this.contact.location,[
      Validators.required,
    ]),

   });
  }
   onSubmit():void{
     this.submitted=true;
   }
 }
  

