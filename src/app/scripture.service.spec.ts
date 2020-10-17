import { TestBed } from '@angular/core/testing';

import { ScriptureService } from './scripture.service';

describe('ScriptureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptureService = TestBed.get(ScriptureService);
    expect(service).toBeTruthy();
  });
});
