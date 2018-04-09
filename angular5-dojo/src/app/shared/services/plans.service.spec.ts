import { TestBed, inject } from '@angular/core/testing';

import { PlansService } from './plans.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig} from '../../app.config';

describe('PlansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
      providers: [
        PlansService,
        AppConfig]
    });
  });

  it('should be created', inject([PlansService], (service: PlansService) => {
    expect(service).toBeTruthy();
  }));
});
