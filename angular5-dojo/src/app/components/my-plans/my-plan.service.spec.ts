import { TestBed, inject } from '@angular/core/testing';

import { MyPlanService } from './my-plan.service';

describe('MyPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPlanService]
    });
  });

  it('should be created', inject([MyPlanService], (service: MyPlanService) => {
    expect(service).toBeTruthy();
  }));
});
