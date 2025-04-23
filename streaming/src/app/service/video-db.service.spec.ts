import { TestBed } from '@angular/core/testing';

import { VideoDbService } from './video-db.service';

describe('VideoDbService', () => {
  let service: VideoDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
