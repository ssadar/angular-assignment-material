import { TestBed } from '@angular/core/testing';
import { OrderHistoryService } from './order-history.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: OrderHistoryService = TestBed.get(OrderHistoryService);
    expect(service).toBeTruthy();
  });
});
