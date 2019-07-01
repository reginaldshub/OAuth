import { TestBed } from '@angular/core/testing';

import { SocialAuthServiceService } from './social-auth-service.service';

describe('SocialAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialAuthServiceService = TestBed.get(SocialAuthServiceService);
    expect(service).toBeTruthy();
  });
});
