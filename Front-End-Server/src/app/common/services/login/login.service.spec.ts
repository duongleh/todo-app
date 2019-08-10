import { TestBed } from '@angular/core/testing';

import { LogInService } from './login.service';

describe('LogInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogInService = TestBed.get(LogInService);
    expect(service).toBeTruthy();
  });
});
