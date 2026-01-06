import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngf-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative" #dropdownContainer>
      <button
        #trigger
        type="button"
        class="inline-flex items-center rounded-lg px-4 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
        [class]="buttonClass"
        (click)="toggle()"
        [attr.aria-expanded]="isOpen"
        [attr.aria-haspopup]="true"
      >
        <ng-content select="[ngfDropdownToggle]"></ng-content>
        <ng-container *ngIf="!hasToggleContent">
          {{ label }}
        </ng-container>
        <svg
          *ngIf="showArrow"
          class="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        #menu
        class="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-lg dark:bg-gray-700 dark:divide-gray-600"
        [class.hidden]="!isOpen"
        [class.top-full]="placement === 'bottom'"
        [class.bottom-full]="placement === 'top'"
        [class.left-0]="alignment === 'start'"
        [class.right-0]="alignment === 'end'"
        [class.mt-2]="placement === 'bottom'"
        [class.mb-2]="placement === 'top'"
      >
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" [attr.aria-labelledby]="trigger.id">
          <ng-content></ng-content>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NgfDropdownComponent implements OnInit, OnDestroy {
  @Input() label?: string;
  @Input() buttonClass = 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  @Input() placement: 'top' | 'bottom' = 'bottom';
  @Input() alignment: 'start' | 'end' = 'start';
  @Input() showArrow = true;
  @Input() closeOnClick = true;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @ViewChild('dropdownContainer') container!: ElementRef;
  @ViewChild('trigger') trigger!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  isOpen = false;
  hasToggleContent = false;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // Check if toggle content exists
    this.hasToggleContent = this.trigger?.nativeElement.querySelector('[ngfDropdownToggle]') !== null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.opened.emit();
    }
  }

  close(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.closed.emit();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !this.container.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isOpen) {
      this.close();
    }
  }
}

@Component({
  selector: 'ngf-dropdown-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li>
      <a
        href="#"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        [class.text-red-600]="danger"
        [class.dark:text-red-500]="danger"
        (click)="onClick($event)"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class NgfDropdownItemComponent {
  @Input() danger = false;
  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.clicked.emit(event);
  }
}

