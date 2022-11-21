import { TestBed } from '@angular/core/testing';

import { LemonService } from './lemon.service';

describe('LemonService', () => {
  let service: LemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
