import { Injectable } from '@angular/core';

/**
 * A service that can be injected into a drawer content component to control the drawer instance.
 * It provides methods to close or dismiss the drawer.
 */
@Injectable()
export class NgfActiveDrawer {
  /**
   * Closes the drawer with an optional result
   */
  close(result?: any): void {
    // This will be set by the drawer service
    throw new Error('NgfActiveDrawer.close() called but drawer reference is not set');
  }

  /**
   * Dismisses the drawer with an optional reason
   */
  dismiss(reason?: any): void {
    // This will be set by the drawer service
    throw new Error('NgfActiveDrawer.dismiss() called but drawer reference is not set');
  }
}

