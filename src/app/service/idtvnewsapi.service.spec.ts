import { TestBed } from '@angular/core/testing';

import { IdtvnewsapiService } from './idtvnewsapi.service';

describe('IdtvnewsapiService', () => {
  let service: IdtvnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdtvnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
