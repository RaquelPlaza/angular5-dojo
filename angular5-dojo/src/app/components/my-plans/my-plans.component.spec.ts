import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { MyPlansComponent } from './my-plans.component';
import { PlansService} from '../../shared/services/plans.service';
import { AppConfig } from '../../app.config';

describe('MyPlansComponent', () => {
  let component: MyPlansComponent;
  let fixture: ComponentFixture<MyPlansComponent>;
  let plansService: PlansService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
      declarations: [ MyPlansComponent ],
      providers: [ AppConfig, PlansService ]
    });

    fixture = TestBed.createComponent(MyPlansComponent);
    component = fixture.componentInstance;
    plansService = TestBed.get(PlansService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(plansService, 'getPlans').and.returnValue({});
    expect(component).toBeTruthy();
  });
});
