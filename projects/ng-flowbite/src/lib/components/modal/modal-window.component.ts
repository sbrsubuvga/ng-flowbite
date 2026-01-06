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
import { NgfModalConfig } from './modal-config';
import { NgfModalRef } from './modal-ref';
import { NgfActiveModal } from './active-modal.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngf-modal-window',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #backdrop
      class="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 transition-opacity"
      [class.hidden]="!isVisible"
      (click)="onBackdropClick()"
      [attr.aria-hidden]="!isVisible"
    ></div>
    <div
      #modal
      class="fixed inset-0 z-50 overflow-y-auto"
      [class.hidden]="!isVisible"
      (click)="$event.stopPropagation()"
      role="dialog"
      [attr.aria-modal]="true"
      [attr.aria-labelledby]="config.ariaLabelledBy"
      [attr.aria-describedby]="config.ariaDescribedBy"
    >
      <div class="flex min-h-full items-center justify-center p-4" [class.items-center]="config.centered">
        <div
          class="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-800"
          [class.max-w-sm]="config.size === 'sm'"
          [class.max-w-md]="config.size === 'md'"
          [class.max-w-lg]="config.size === 'lg'"
          [class.max-w-xl]="config.size === 'xl'"
          [class.max-w-2xl]="config.size === '2xl'"
          [class.max-w-full]="config.size === 'full'"
          [class]="config.modalClass"
        >
          <button
            *ngIf="config.showCloseButton"
            type="button"
            class="absolute end-2.5 top-3 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white ms-auto inline-flex h-8 w-8 items-center justify-center"
            (click)="dismissModal()"
            aria-label="Close"
          >
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <ng-container #modalContent></ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NgfModalWindowComponent implements OnInit, OnDestroy {
  @Input() config!: NgfModalConfig;
  @Input() modalRef!: NgfModalRef;
  @Input() content!: Type<any> | TemplateRef<any>;
  @Output() close = new EventEmitter<any>();
  @Output() dismiss = new EventEmitter<any>();

  @ViewChild('modalContent', { read: ViewContainerRef }) modalContent!: ViewContainerRef;
  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;

  isVisible = false;
  private destroy$ = new Subject<void>();

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    // Use AfterViewInit to ensure ViewChild is available
    setTimeout(() => {
      this._loadContent();
      // Trigger animation
      setTimeout(() => {
        this.isVisible = true;
      }, 10);
    }, 0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.config.keyboard && this.isVisible) {
      this.dismissModal();
    }
  }

  onBackdropClick(): void {
    if (this.config.backdrop === true) {
      this.dismissModal();
    }
  }

  private _loadContent(): void {
    if (!this.modalContent) {
      return;
    }

    this.modalContent.clear();

    if (this.content instanceof TemplateRef) {
      // Handle template
      const context = { $implicit: this.modalRef, activeModal: this.modalRef };
      this.modalContent.createEmbeddedView(this.content, context);
    } else {
      // Handle component
      const componentRef = this.modalContent.createComponent(this.content, {
        injector: this._createInjector()
      });
      this.modalRef.componentInstance = componentRef.instance;
    }
  }

  private _createInjector(): Injector {
    const activeModal = new NgfActiveModal();
    activeModal.close = (result?: any) => this.closeModal(result);
    activeModal.dismiss = (reason?: any) => this.dismissModal(reason);

    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: NgfActiveModal, useValue: activeModal }
      ]
    });
  }

  private closeModal(result?: any): void {
    this.isVisible = false;
    setTimeout(() => {
      this.modalRef.close(result);
      this.close.emit(result);
    }, this.config.animationDuration || 300);
  }

  dismissModal(reason?: any): void {
    this.isVisible = false;
    setTimeout(() => {
      this.modalRef.dismiss(reason);
      this.dismiss.emit(reason);
    }, this.config.animationDuration || 300);
  }
}

