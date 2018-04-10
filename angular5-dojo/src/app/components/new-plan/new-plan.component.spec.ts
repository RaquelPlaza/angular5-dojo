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

describe('NewPlanComponent', () => {
  let component: NewPlanComponent;
  let fixture: ComponentFixture<NewPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        AlertModule.forRoot(),
        HttpClientModule,
        HttpClientTestingModule],
      declarations: [ NewPlanComponent ],
      providers: [PlansService, AppConfig]
    });

    fixture = TestBed.createComponent(NewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.newPlanForm.valid).toBeFalsy();
  });

  // it('setting submitted to true, displays the notification', () =>{
  //   component.submitted = true;
  //   fixture.detectChanges();
  //   expect(el.nativeElement.submitted).toBeTruthy();
  // });
});
