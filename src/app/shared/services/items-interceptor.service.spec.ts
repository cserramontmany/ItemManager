import { TestBed } from '@angular/core/testing';

import { ItemsInterceptorService } from './items-interceptor.service';

describe('ItemsInterceptorService', () => {
  let service: ItemsInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
