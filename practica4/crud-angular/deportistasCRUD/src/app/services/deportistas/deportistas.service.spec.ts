import { TestBed } from '@angular/core/testing';

import { DeportistasService } from './deportistas.service';

describe('DeportistasService', () => {
  let service: DeportistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
