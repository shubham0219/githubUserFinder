import { TestBed } from '@angular/core/testing';

import { GithubhService } from './githubh.service';

describe('GithubhService', () => {
  let service: GithubhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
