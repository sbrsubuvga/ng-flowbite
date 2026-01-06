import { TestBed } from '@angular/core/testing';
import { ApplicationRef } from '@angular/core';
import { NgfToastService } from './toast.service';
import { NgfToastConfig } from './toast-config';

describe('NgfToastService', () => {
  let service: NgfToastService;
  let applicationRef: ApplicationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgfToastService, ApplicationRef]
    });
    service = TestBed.inject(NgfToastService);
    applicationRef = TestBed.inject(ApplicationRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a toast', () => {
    const toastRef = service.show('Test message');
    expect(toastRef).toBeTruthy();
    expect(toastRef.id).toBeTruthy();
  });

  it('should show success toast', () => {
    const toastRef = service.success('Success message');
    expect(toastRef).toBeTruthy();
  });

  it('should show error toast', () => {
    const toastRef = service.error('Error message');
    expect(toastRef).toBeTruthy();
  });

  it('should show warning toast', () => {
    const toastRef = service.warning('Warning message');
    expect(toastRef).toBeTruthy();
  });

  it('should show info toast', () => {
    const toastRef = service.info('Info message');
    expect(toastRef).toBeTruthy();
  });
});

