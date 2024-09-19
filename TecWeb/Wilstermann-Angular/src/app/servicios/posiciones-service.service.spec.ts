import { TestBed } from '@angular/core/testing';

import { PosicionesServiceService } from './posiciones-service.service';

describe('PosicionesServiceService', () => {
  let service: PosicionesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosicionesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
