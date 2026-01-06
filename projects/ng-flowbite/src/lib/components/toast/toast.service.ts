import { Injectable, ComponentRef, ApplicationRef, createComponent } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NgfToastComponent } from './toast.component';
import { NgfToastConfig } from './toast-config';

export interface NgfToastRef {
  id: string;
  componentRef: ComponentRef<NgfToastComponent>;
  close: () => void;
}

@Injectable({ providedIn: 'root' })
export class NgfToastService {
  private toasts: NgfToastRef[] = [];
  private toastContainer?: HTMLElement;

  constructor(private applicationRef: ApplicationRef) {
    this._createContainer();
  }

  show(message: string, config?: NgfToastConfig): NgfToastRef {
    const toastConfig = { ...new NgfToastConfig(), ...config };
    const toastId = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const toastRef = createComponent(NgfToastComponent, {
      environmentInjector: this.applicationRef.injector
    });

    toastRef.setInput('message', message);
    toastRef.setInput('config', toastConfig);
    toastRef.setInput('toastId', toastId);

    this.applicationRef.attachView(toastRef.hostView);
    if (this.toastContainer) {
      this.toastContainer.appendChild(toastRef.location.nativeElement);
    }

    const ref: NgfToastRef = {
      id: toastId,
      componentRef: toastRef,
      close: () => this._removeToast(toastId)
    };

    toastRef.instance.onClose.subscribe(() => {
      this._removeToast(toastId);
    });

    this.toasts.push(ref);

    // Auto dismiss if duration is set
    if (toastConfig.duration && toastConfig.duration > 0) {
      setTimeout(() => {
        this._removeToast(toastId);
      }, toastConfig.duration);
    }

    return ref;
  }

  success(message: string, config?: NgfToastConfig): NgfToastRef {
    const mergedConfig = { ...new NgfToastConfig(), ...config, color: 'green' as const };
    return this.show(message, mergedConfig);
  }

  error(message: string, config?: NgfToastConfig): NgfToastRef {
    const mergedConfig = { ...new NgfToastConfig(), ...config, color: 'red' as const };
    return this.show(message, mergedConfig);
  }

  warning(message: string, config?: NgfToastConfig): NgfToastRef {
    const mergedConfig = { ...new NgfToastConfig(), ...config, color: 'yellow' as const };
    return this.show(message, mergedConfig);
  }

  info(message: string, config?: NgfToastConfig): NgfToastRef {
    const mergedConfig = { ...new NgfToastConfig(), ...config, color: 'blue' as const };
    return this.show(message, mergedConfig);
  }

  clear(): void {
    this.toasts.forEach(toast => toast.close());
  }

  private _createContainer(): void {
    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'ngf-toast-container';
    this.toastContainer.className = 'fixed top-4 end-4 z-50 flex flex-col gap-2';
    document.body.appendChild(this.toastContainer);
  }

  private _removeToast(id: string): void {
    const index = this.toasts.findIndex(t => t.id === id);
    if (index > -1) {
      const toast = this.toasts[index];
      this.applicationRef.detachView(toast.componentRef.hostView);
      toast.componentRef.destroy();
      this.toasts.splice(index, 1);
    }
  }
}

