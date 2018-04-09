import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

import { NewPlanComponent } from './new-plan.component';
import { PlansService} from '../../shared/services/plans.service';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { AlertModule, BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppConfig } from '../../app.config';
import { Http } from '@angular/http';

describe('NewPlanComponent', () => {
  let component: NewPlanComponent;
  let fixture: ComponentFixture<NewPlanComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule,
        TimepickerModule,
        AlertModule,
        HttpClientModule,
        HttpClientTestingModule,
        Http],
      declarations: [ NewPlanComponent ],
      providers: [PlansService, AppConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //el = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.newPlanForm.valid).toBeFalsy();
  });

  it('setting submitted to true, displays the notificatio', () =>{
    component.submitted = true;
    fixture.detectChanges();
    expect(el.nativeElement.submitted).toBeTruthy();
  });
});
