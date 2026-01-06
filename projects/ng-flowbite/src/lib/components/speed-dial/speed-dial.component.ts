import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-speed-dial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="dialClasses">
      <button
        type="button"
        [class]="mainButtonClasses"
        (click)="toggle()"
        [attr.aria-expanded]="isOpen"
        [attr.aria-label]="ariaLabel"
      >
        <svg
          *ngIf="!isOpen"
          [class]="iconClasses"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
        <svg
          *ngIf="isOpen"
          [class]="iconClasses"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span class="sr-only">{{ ariaLabel }}</span>
      </button>
      <div [class]="tooltipClasses">
        {{ tooltip }}
      </div>
      <ul [class]="actionsClasses">
        <li *ngFor="let action of actions; let i = index">
          <button
            type="button"
            [class]="getActionButtonClasses(i)"
            (click)="onActionClick(action, i)"
            [attr.aria-label]="action.label"
            [attr.data-tooltip-target]="action.tooltip ? 'tooltip-' + i : null"
          >
            <svg
              *ngIf="action.icon"
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path [attr.d]="action.icon"></path>
            </svg>
            <span class="sr-only">{{ action.label }}</span>
          </button>
          <div
            *ngIf="action.tooltip"
            [id]="'tooltip-' + i"
            role="tooltip"
            [class]="actionTooltipClasses"
          >
            {{ action.tooltip }}
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
      </ul>
    </div>
  `
})
export class NgfSpeedDialComponent {
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() tooltip?: string;
  @Input() ariaLabel = 'Speed dial';
  @Input() actions: SpeedDialAction[] = [];
  @Input() isOpen = false;
  @Output() actionClick = new EventEmitter<{ action: SpeedDialAction; index: number }>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  get dialClasses(): string {
    const base = 'fixed z-50 group';
    const positionClasses = {
      top: 'top-6 left-1/2 -translate-x-1/2',
      bottom: 'bottom-6 left-1/2 -translate-x-1/2',
      left: 'left-6 top-1/2 -translate-y-1/2',
      right: 'right-6 top-1/2 -translate-y-1/2'
    };
    return `${base} ${positionClasses[this.position]}`.trim();
  }

  get mainButtonClasses(): string {
    return 'flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 focus:outline-none';
  }

  get iconClasses(): string {
    return 'w-5 h-5 transition-transform group-hover:rotate-180';
  }

  get tooltipClasses(): string {
    return 'absolute mb-2 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300';
  }

  get actionsClasses(): string {
    const base = 'flex flex-col items-center mb-4 space-y-2';
    const directionClasses = {
      up: 'flex-col-reverse',
      down: 'flex-col',
      left: 'flex-row-reverse',
      right: 'flex-row'
    };
    return `${base} ${directionClasses[this.direction]}`.trim();
  }

  get actionTooltipClasses(): string {
    return 'absolute z-10 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm';
  }

  getActionButtonClasses(index: number): string {
    const base = 'flex items-center justify-center w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 shadow-lg hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 focus:outline-none';
    return base;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }

  onActionClick(action: SpeedDialAction, index: number): void {
    this.actionClick.emit({ action, index });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !(event.target as HTMLElement).closest('.ngf-speed-dial')) {
      this.isOpen = false;
      this.closed.emit();
    }
  }
}

export interface SpeedDialAction {
  label: string;
  icon?: string;
  tooltip?: string;
  onClick?: () => void;
}

