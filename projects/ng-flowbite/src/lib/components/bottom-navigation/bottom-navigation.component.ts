import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-bottom-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [id]="navigationId" [class]="navigationClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfBottomNavigationComponent {
  @Input() navigationId = `bottom-nav-${Math.random().toString(36).substr(2, 9)}`;
  @Input() fixed = true;

  get navigationClasses(): string {
    const base = 'fixed z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600';
    const positionClass = this.fixed ? 'bottom-0 left-0 right-0' : '';
    return `${base} ${positionClass}`.trim();
  }
}

@Component({
  selector: 'ngf-bottom-nav-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="itemClasses"
      (click)="onClick.emit()"
      [attr.aria-label]="label"
    >
      <svg
        *ngIf="icon"
        [class]="iconClasses"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path [attr.d]="icon"></path>
      </svg>
      <span *ngIf="label" [class]="labelClasses">{{ label }}</span>
      <span
        *ngIf="badge"
        [class]="badgeClasses"
      >
        {{ badge }}
      </span>
    </button>
  `
})
export class NgfBottomNavItemComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() badge?: string | number;
  @Input() active = false;
  @Output() onClick = new EventEmitter<void>();

  get itemClasses(): string {
    const base = 'inline-flex flex-col items-center justify-center px-5 group';
    const activeClass = this.active
      ? 'text-blue-600 dark:text-blue-500'
      : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500';
    return `${base} ${activeClass}`.trim();
  }

  get iconClasses(): string {
    return 'w-5 h-5 mb-1';
  }

  get labelClasses(): string {
    return 'text-xs';
  }

  get badgeClasses(): string {
    return 'inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900';
  }
}

