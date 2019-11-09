import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
