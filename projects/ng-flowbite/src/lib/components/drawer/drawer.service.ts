import { Injectable, ComponentRef, Injector, TemplateRef, Type, ApplicationRef, createComponent } from '@angular/core';
import { NgfDrawerRef } from './drawer-ref';
import { NgfDrawerConfig } from './drawer-config';
import { NgfDrawerWindowComponent } from './drawer-window.component';

/**
 * A service to open drawer panels. Creating a drawer is straightforward: create a component or a template and use the
 * `open()` method.
 */
@Injectable({ providedIn: 'root' })
export class NgfDrawerService {
  private _activeInstances: NgfDrawerRef[] = [];
  private _drawerContainer?: HTMLElement;

  constructor(
    private _injector: Injector,
    private _applicationRef: ApplicationRef
  ) {
    // Create a container for drawer if it doesn't exist
    if (!document.getElementById('ngf-drawer-container')) {
      this._drawerContainer = document.createElement('div');
      this._drawerContainer.id = 'ngf-drawer-container';
      document.body.appendChild(this._drawerContainer);
    } else {
      this._drawerContainer = document.getElementById('ngf-drawer-container')!;
    }
  }

  /**
   * Opens a drawer panel with the specified component or template as content.
   *
   * @param content The component type or template reference to use as drawer content
   * @param config Optional configuration for the drawer
   * @returns A reference to the opened drawer
   */
  open<T = any>(
    content: Type<T> | TemplateRef<T>,
    config?: NgfDrawerConfig
  ): NgfDrawerRef<T> {
    const drawerConfig = { ...new NgfDrawerConfig(), ...config };
    const drawerRef = new NgfDrawerRef<T>(drawerConfig);

    // Create drawer window component
    const drawerWindowRef = createComponent(NgfDrawerWindowComponent, {
      environmentInjector: this._applicationRef.injector
    });

    // Set inputs
    drawerWindowRef.setInput('config', drawerConfig);
    drawerWindowRef.setInput('drawerRef', drawerRef);
    drawerWindowRef.setInput('content', content);

    // Attach to view
    this._applicationRef.attachView(drawerWindowRef.hostView);
    if (this._drawerContainer) {
      // Ensure container is positioned correctly
      this._drawerContainer.style.position = 'fixed';
      this._drawerContainer.style.top = '0';
      this._drawerContainer.style.left = '0';
      this._drawerContainer.style.right = '0';
      this._drawerContainer.style.bottom = '0';
      this._drawerContainer.style.pointerEvents = 'none';
      this._drawerContainer.style.zIndex = '50';
      this._drawerContainer.appendChild(drawerWindowRef.location.nativeElement);
    }

    // Handle close/dismiss
    drawerWindowRef.instance.close.subscribe((result: any) => {
      this._destroyDrawer(drawerWindowRef, drawerRef);
    });
    drawerWindowRef.instance.dismiss.subscribe((reason: any) => {
      this._destroyDrawer(drawerWindowRef, drawerRef);
    });

    // Store reference
    (drawerRef as any)._windowRef = drawerWindowRef;
    this._activeInstances.push(drawerRef);

    drawerRef.result.finally(() => {
      const index = this._activeInstances.indexOf(drawerRef);
      if (index > -1) {
        this._activeInstances.splice(index, 1);
      }
    });

    return drawerRef;
  }

  /**
   * Returns the list of currently active drawer instances
   */
  get activeInstances(): NgfDrawerRef[] {
    return this._activeInstances;
  }

  /**
   * Dismisses all currently open drawer panels
   */
  dismissAll(reason?: any): void {
    this._activeInstances.forEach((ref) => ref.dismiss(reason));
  }

  private _destroyDrawer(drawerWindowRef: ComponentRef<NgfDrawerWindowComponent>, drawerRef: NgfDrawerRef): void {
    this._applicationRef.detachView(drawerWindowRef.hostView);
    drawerWindowRef.destroy();
  }
}

