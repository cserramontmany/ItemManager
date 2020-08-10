import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ItemService', () => {
  let service: ItemService;
let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
