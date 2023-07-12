import { TestBed } from '@angular/core/testing';

import { EjerciciorealizadosService } from './ejerciciorealizados.service';

describe('EjerciciorealizadosService', () => {
  let service: EjerciciorealizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjerciciorealizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
