import { TestBed } from '@angular/core/testing';

import { WorkleavesService } from './workleaves.service';

describe('WorkleavesService', () => {
  let service: WorkleavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkleavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
