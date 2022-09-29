import { TestBed } from '@angular/core/testing';

import { SumarServicioService } from './sumar-servicio.service';

describe('SumarServicioService', () => {
  let service: SumarServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumarServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
