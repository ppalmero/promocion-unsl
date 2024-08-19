import { TestBed } from '@angular/core/testing';

import { MascaraFechaService } from './mascara-fecha.service';

describe('MascaraFechaService', () => {
  let service: MascaraFechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascaraFechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
