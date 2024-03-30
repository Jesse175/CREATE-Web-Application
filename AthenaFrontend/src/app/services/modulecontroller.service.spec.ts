import { TestBed } from '@angular/core/testing';

import { ModulecontrollerService } from './modulecontroller.service';

describe('ModulecontrollerService', () => {
  let service: ModulecontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulecontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
