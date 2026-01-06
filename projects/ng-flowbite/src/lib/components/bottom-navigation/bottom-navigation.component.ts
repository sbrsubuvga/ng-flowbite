import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-bottom-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [id]="navigationId" [ngClass]="getNavigationClasses()">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfBottomNavigationComponent {
  @Input() navigationId = `bottom-nav-${Math.random().toString(36).substr(2, 9)}`;
  @Input() fixed = true;

  getNavigationClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'z-50': true,
      'w-full': true,
      'h-16': true,
      'bg-white': true,
      'border-t': true,
      'border-gray-200': true,
      'dark:bg-gray-700': true,
      'dark:border-gray-600': true
    };

    if (this.fixed) {
      baseClasses['fixed'] = true;
      baseClasses['bottom-0'] = true;
      baseClasses['left-0'] = true;
      baseClasses['right-0'] = true;
    }

    return baseClasses;
  }
}

@Component({
  selector: 'ngf-bottom-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <button
      type="button"
      [ngClass]="getItemClasses()"
      (click)="handleClick()"
      [attr.aria-label]="label"
    >
      <svg
        *ngIf="icon"
        [ngClass]="getIconClasses()"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path [attr.d]="icon"></path>
      </svg>
      <span *ngIf="label" [ngClass]="getLabelClasses()">{{ label }}</span>
      <span
        *ngIf="badge"
        [ngClass]="getBadgeClasses()"
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
  @Input() routerLink?: string;
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }

  getItemClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'inline-flex': true,
      'flex-col': true,
      'items-center': true,
      'justify-center': true,
      'px-5': true,
      'group': true
    };

    if (this.active) {
      baseClasses['text-blue-600'] = true;
      baseClasses['dark:text-blue-500'] = true;
    } else {
      baseClasses['text-gray-500'] = true;
      baseClasses['hover:text-gray-600'] = true;
      baseClasses['dark:text-gray-400'] = true;
      baseClasses['dark:hover:text-gray-500'] = true;
    }

    return baseClasses;
  }

  getIconClasses(): { [key: string]: boolean } {
    return {
      'w-5': true,
      'h-5': true,
      'mb-1': true
    };
  }

  getLabelClasses(): { [key: string]: boolean } {
    return {
      'text-xs': true
    };
  }

  getBadgeClasses(): { [key: string]: boolean } {
    return {
      'inline-flex': true,
      'items-center': true,
      'justify-center': true,
      'w-5': true,
      'h-5': true,
      'text-xs': true,
      'font-bold': true,
      'text-white': true,
      'bg-blue-600': true,
      'border-2': true,
      'border-white': true,
      'rounded-full': true,
      '-top-2': true,
      '-end-2': true,
      'dark:border-gray-900': true
    };
  }
}

