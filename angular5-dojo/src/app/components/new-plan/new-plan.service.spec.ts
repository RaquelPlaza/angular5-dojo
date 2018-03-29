import { TestBed, inject } from '@angular/core/testing';

import { NewPlanService } from './new-plan.service';

describe('NewPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPlanService]
    });
  });

  it('should be created', inject([NewPlanService], (service: NewPlanService) => {
    expect(service).toBeTruthy();
  }));
});
