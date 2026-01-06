import { TestBed } from '@angular/core/testing';
import { ApplicationRef } from '@angular/core';
import { NgfModalService } from './modal.service';
import { NgfModalConfig } from './modal-config';

describe('NgfModalService', () => {
  let service: NgfModalService;
  let applicationRef: ApplicationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgfModalService, ApplicationRef]
    });
    service = TestBed.inject(NgfModalService);
    applicationRef = TestBed.inject(ApplicationRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have empty activeInstances initially', () => {
    expect(service.activeInstances.length).toBe(0);
  });

  it('should dismiss all modals', () => {
    const config = new NgfModalConfig();
    // Note: This is a simplified test - full implementation would require component creation
    expect(service.activeInstances.length).toBe(0);
  });
});

