import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';

describe('InicioService', () => {
  let service: TextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
