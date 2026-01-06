import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ComponentRef,
  Injector,
  Type,
  HostListener
} from '@angular/core';
import { NgfDrawerConfig } from './drawer-config';
import { NgfDrawerRef } from './drawer-ref';
import { NgfActiveDrawer } from './active-drawer.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngf-drawer-window',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #backdrop
      class="fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 transition-opacity duration-300"
      [style.z-index]="9998"
      [class.opacity-0]="!isVisible"
      [class.opacity-100]="isVisible"
      [class.pointer-events-none]="!isVisible"
      (click)="onBackdropClick()"
      [attr.aria-hidden]="!isVisible"
    ></div>
    <div
      #drawer
      class="fixed transition-transform duration-300 ease-in-out"
      [style.z-index]="9999"
      [class.top-0]="config.position === 'top'"
      [class.bottom-0]="config.position === 'bottom'"
      [class.left-0]="config.position === 'start'"
      [class.right-0]="config.position === 'end'"
      [class.w-full]="config.position === 'top' || config.position === 'bottom'"
      [class.h-full]="config.position === 'start' || config.position === 'end'"
      [style.width]="config.position === 'start' || config.position === 'end' ? (config.width || '384px') : (config.position === 'top' || config.position === 'bottom' ? '100%' : 'auto')"
      [style.height]="config.position === 'top' || config.position === 'bottom' ? (config.height || 'auto') : (config.position === 'start' || config.position === 'end' ? '100%' : 'auto')"
      [ngClass]="{
        '-translate-x-full': config.position === 'start' && !isVisible,
        'translate-x-full': config.position === 'end' && !isVisible,
        '-translate-y-full': config.position === 'top' && !isVisible,
        'translate-y-full': config.position === 'bottom' && !isVisible,
        'translate-x-0': (config.position === 'start' || config.position === 'end') && isVisible,
        'translate-y-0': (config.position === 'top' || config.position === 'bottom') && isVisible
      }"
      [class]="config.drawerClass || ''"
      role="dialog"
      [attr.aria-modal]="true"
      [attr.aria-labelledby]="config.ariaLabelledBy"
      [attr.aria-describedby]="config.ariaDescribedBy"
      (click)="$event.stopPropagation()"
    >
      <div class="flex h-full flex-col bg-white shadow-xl dark:bg-gray-800">
        <div *ngIf="config.showCloseButton" class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h5 class="text-base font-semibold text-gray-900 dark:text-white" [attr.id]="config.ariaLabelledBy">Drawer</h5>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            (click)="dismissDrawer()"
            aria-label="Close"
          >
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close menu</span>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto">
          <ng-container #drawerContent></ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 9999;
    }
    :host > div[role="dialog"] {
      pointer-events: auto;
    }
  `]
})
export class NgfDrawerWindowComponent implements OnInit, OnDestroy {
  @Input() config!: NgfDrawerConfig;
  @Input() drawerRef!: NgfDrawerRef;
  @Input() content!: Type<any> | TemplateRef<any>;
  @Output() close = new EventEmitter<any>();
  @Output() dismiss = new EventEmitter<any>();

  @ViewChild('drawerContent', { read: ViewContainerRef }) drawerContent!: ViewContainerRef;
  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('drawer') drawer!: ElementRef;

  isVisible = false;
  private destroy$ = new Subject<void>();

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    // Lock body scroll when drawer is open (only if no other drawers are open)
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    }
    
    // Start with drawer off-screen (isVisible = false), then load content and animate in
    // Use setTimeout to ensure ViewChild is available and DOM is ready
    setTimeout(() => {
      this._loadContent();
      // Trigger animation after content is loaded and DOM is ready
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        setTimeout(() => {
          this.isVisible = true;
        }, 50);
      });
    }, 0);
  }

  ngOnDestroy(): void {
    // Restore body scroll when drawer is destroyed (check if other drawers are still open)
    // This is a simple check - in a production app, you'd want to track active drawers
    const activeDrawers = document.querySelectorAll('ngf-drawer-window');
    if (activeDrawers.length <= 1) {
      document.body.style.overflow = '';
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.config.keyboard && this.isVisible) {
      this.dismissDrawer();
    }
  }

  onBackdropClick(): void {
    if (this.config.backdrop === true) {
      this.dismissDrawer();
    }
  }

  private _loadContent(): void {
    if (!this.drawerContent) {
      // Retry if ViewChild is not ready
      setTimeout(() => this._loadContent(), 10);
      return;
    }

    this.drawerContent.clear();

    if (this.content instanceof TemplateRef) {
      // Handle template
      const context = { $implicit: this.drawerRef, activeDrawer: this.drawerRef };
      this.drawerContent.createEmbeddedView(this.content, context);
    } else {
      // Handle component
      const componentRef = this.drawerContent.createComponent(this.content, {
        injector: this._createInjector()
      });
      this.drawerRef.componentInstance = componentRef.instance;
    }
  }

  private _createInjector(): Injector {
    const activeDrawer = new NgfActiveDrawer();
    activeDrawer.close = (result?: any) => this.closeDrawer(result);
    activeDrawer.dismiss = (reason?: any) => this.dismissDrawer(reason);

    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: NgfActiveDrawer, useValue: activeDrawer }
      ]
    });
  }

  private closeDrawer(result?: any): void {
    this.isVisible = false;
    // Restore body scroll
    document.body.style.overflow = '';
    setTimeout(() => {
      this.drawerRef.close(result);
      this.close.emit(result);
    }, this.config.animationDuration || 300);
  }

  dismissDrawer(reason?: any): void {
    this.isVisible = false;
    // Restore body scroll
    document.body.style.overflow = '';
    setTimeout(() => {
      this.drawerRef.dismiss(reason);
      this.dismiss.emit(reason);
    }, this.config.animationDuration || 300);
  }
}

