import { TestBed } from '@angular/core/testing';

import { StudentEnrolService } from './student-enrol.service';

describe('StudentEnrolService', () => {
  let service: StudentEnrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEnrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
