import { TestBed } from '@angular/core/testing';

import { QuestcontrollerService } from './questcontroller.service';

describe('QuestcontrollerService', () => {
  let service: QuestcontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestcontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
