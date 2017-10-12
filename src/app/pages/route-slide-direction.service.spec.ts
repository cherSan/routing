import { TestBed, inject } from '@angular/core/testing';

import { RouteSlideDirectionService } from './route-slide-direction.service';

describe('RouteSlideDirectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteSlideDirectionService]
    });
  });

  it('should be created', inject([RouteSlideDirectionService], (service: RouteSlideDirectionService) => {
    expect(service).toBeTruthy();
  }));
});
