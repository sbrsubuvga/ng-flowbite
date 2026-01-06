import { Injectable } from '@angular/core';

/**
 * A service that can be injected into a modal content component to control the modal instance.
 * It provides methods to close or dismiss the modal.
 */
@Injectable()
export class NgfActiveModal {
  /**
   * Closes the modal with an optional result
   */
  close(result?: any): void {
    // This will be set by the modal service
    throw new Error('NgfActiveModal.close() called but modal reference is not set');
  }

  /**
   * Dismisses the modal with an optional reason
   */
  dismiss(reason?: any): void {
    // This will be set by the modal service
    throw new Error('NgfActiveModal.dismiss() called but modal reference is not set');
  }
}

