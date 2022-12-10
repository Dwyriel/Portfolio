import { TestBed } from '@angular/core/testing';

import { AppResourcesService } from './app-resources.service';

describe('AppResourcesService', () => {
  let service: AppResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
