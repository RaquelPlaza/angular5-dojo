import { TestBed, inject } from '@angular/core/testing';

import { PlansService } from './plans.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppConfig} from '../../app.config';

describe('PlansService', () => {


  class MockPlanService extends PlansService {
    this = '';
    public getConfig() {
      return 'http://localhost:3000';
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
      providers: [
        AppConfig,
        {
          provide: PlansService,
          useClass: MockPlanService
        }
        ]
    });
  });

  it('should be created', inject([
    PlansService], (service: PlansService) => {
    expect(service).toBeTruthy();
  }));
});
