import { TestBed } from '@angular/core/testing';

import { FilterProductsService } from './filter-products.service';

describe('FilterProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterProductsService = TestBed.get(FilterProductsService);
    expect(service).toBeTruthy();
  });
});
