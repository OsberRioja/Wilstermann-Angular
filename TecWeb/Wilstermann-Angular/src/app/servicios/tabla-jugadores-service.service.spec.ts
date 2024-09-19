import { TestBed } from '@angular/core/testing';

import { TablaJugadoresServiceService } from './tabla-jugadores-service.service';

describe('TablaJugadoresServiceService', () => {
  let service: TablaJugadoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaJugadoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
