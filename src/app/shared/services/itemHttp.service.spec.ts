import { TestBed } from '@angular/core/testing';

import { ItemHttpService } from './itemHttp.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ItemHttpService', () => {
  let service: ItemHttpService;
let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ItemHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
