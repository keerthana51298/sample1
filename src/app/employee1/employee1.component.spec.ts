import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee1Component } from './employee1.component';
import { MockService } from '../mock/mock.service';

describe('EmpComponent', () => {
  let comp: Employee1Component;
  let fixture: ComponentFixture<Employee1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
         Employee1Component 
        ],  
        providers: [ 
          { provide: Employee1Component, useClass: MockService }
        ]
    }).compileComponents().then(() => { 
        fixture = TestBed.createComponent(Employee1Component); 
        comp = fixture.componentInstance;   });
  }));


  it('should create have user', async(() => {
    expect(comp.users.length).toEqual(4); 
  })); 

  it(`html should render one user`, async(() => { 
    fixture.detectChanges(); 
    const e1 = fixture.nativeElement.querySelector('div'); 

    expect(e1.innerText).toContain('keerthana');
  }));
});

