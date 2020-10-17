import { TestBed } from '@angular/core/testing';

import { UpcomingEventService } from './upcoming-event.service';

describe('UpcomingEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpcomingEventService = TestBed.get(UpcomingEventService);
    expect(service).toBeTruthy();
  });
});
