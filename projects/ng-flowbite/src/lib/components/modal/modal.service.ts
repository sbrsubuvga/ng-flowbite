import { Injectable, ComponentRef, Injector, TemplateRef, Type, ApplicationRef, createComponent, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
import { NgfModalRef } from './modal-ref';
import { NgfModalConfig } from './modal-config';
import { NgfModalWindowComponent } from './modal-window.component';

/**
 * A service to open modal windows. Creating a modal is straightforward: create a component or a template and use the
 * `open()` method.
 */
@Injectable({ providedIn: 'root' })
export class NgfModalService {
  private _activeInstances: NgfModalRef[] = [];
  private _modalContainer?: HTMLElement;

  constructor(
    private _injector: Injector,
    private _applicationRef: ApplicationRef
  ) {
    // Create a container for modals
    this._modalContainer = document.createElement('div');
    this._modalContainer.id = 'ngf-modal-container';
    document.body.appendChild(this._modalContainer);
  }

  /**
   * Opens a modal window with the specified component or template as content.
   *
   * @param content The component type or template reference to use as modal content
   * @param config Optional configuration for the modal
   * @returns A reference to the opened modal
   */
  open<T = any>(
    content: Type<T> | TemplateRef<T>,
    config?: NgfModalConfig
  ): NgfModalRef<T> {
    const modalConfig = { ...new NgfModalConfig(), ...config };
    const modalRef = new NgfModalRef<T>(modalConfig);

    // Create modal window component
    const modalWindowRef = createComponent(NgfModalWindowComponent, {
      environmentInjector: this._applicationRef.injector
    });

    // Set inputs
    modalWindowRef.setInput('config', modalConfig);
    modalWindowRef.setInput('modalRef', modalRef);
    modalWindowRef.setInput('content', content);

    // Attach to view
    this._applicationRef.attachView(modalWindowRef.hostView);
    if (this._modalContainer) {
      this._modalContainer.appendChild(modalWindowRef.location.nativeElement);
    }

    // Handle close/dismiss
    modalWindowRef.instance.close.subscribe((result: any) => {
      this._destroyModal(modalWindowRef, modalRef);
    });
    modalWindowRef.instance.dismiss.subscribe((reason: any) => {
      this._destroyModal(modalWindowRef, modalRef);
    });

    // Store reference
    (modalRef as any)._windowRef = modalWindowRef;
    this._activeInstances.push(modalRef);

    modalRef.result.finally(() => {
      const index = this._activeInstances.indexOf(modalRef);
      if (index > -1) {
        this._activeInstances.splice(index, 1);
      }
    });

    return modalRef;
  }

  /**
   * Returns the list of currently active modal instances
   */
  get activeInstances(): NgfModalRef[] {
    return this._activeInstances;
  }

  /**
   * Dismisses all currently open modals
   */
  dismissAll(reason?: any): void {
    this._activeInstances.forEach((ref) => ref.dismiss(reason));
  }

  private _destroyModal(modalWindowRef: ComponentRef<NgfModalWindowComponent>, modalRef: NgfModalRef): void {
    this._applicationRef.detachView(modalWindowRef.hostView);
    modalWindowRef.destroy();
  }
}

