import { TestBed } from '@angular/core/testing';

import { BusinessHourItemService } from './business-hour-item.service';

describe('BusinessHourItemService', () => {
  let service: BusinessHourItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessHourItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
