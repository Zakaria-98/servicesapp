import { TestBed } from '@angular/core/testing';

import { TokinIntrsiptService } from './tokin-intrsipt.service';

describe('TokinIntrsiptService', () => {
  let service: TokinIntrsiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokinIntrsiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
