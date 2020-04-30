import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { DebugElement } from '@angular/core';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmpcontactComponent', () => {
  let comp: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(EmployeeComponent);
      comp=fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
  }));

  it(`should have as text 'contact page'`,async(()=>{
    expect(comp.text).toEqual('employee contact');
  }));
  
  it(`should set submitted to true`,async(()=>{
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));
  it(`form should be invalid`,async(()=>{
    comp.contactForm.controls['firstname'].setValue('');
    comp.contactForm.controls['lastname'].setValue('');
    comp.contactForm.controls['salary'].setValue('');
    comp.contactForm.controls['street1'].setValue('');
    comp.contactForm.controls['street2'].setValue('');
    comp.contactForm.controls['location'].setValue('');
    
    expect(comp.contactForm.valid).toBeFalsy();
  }));
  it(`form should be valid`,async(()=>{
    comp.contactForm.controls['firstname'].setValue('abcd');
    comp.contactForm.controls['lastname'].setValue('efgh');
    comp.contactForm.controls['salary'].setValue('3456');
    comp.contactForm.controls['street1'].setValue('hgth');
    comp.contactForm.controls['street2'].setValue('hjuy');
    comp.contactForm.controls['location'].setValue('jukh');
    expect(comp.contactForm.valid).toBeTruthy();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
