import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="!dismissed"
      [id]="bannerId"
      [ngClass]="getBannerClasses()"
      role="banner"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            *ngIf="showIcon"
            [ngClass]="getIconClasses()"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path [attr.d]="iconPath"></path>
          </svg>
          <p [ngClass]="getTextClasses()">
            <ng-content></ng-content>
          </p>
        </div>
        <button
          *ngIf="dismissible"
          type="button"
          [ngClass]="getCloseButtonClasses()"
          (click)="dismiss()"
          aria-label="Close"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  `
})
export class NgfBannerComponent {
  @Input() bannerId = `banner-${Math.random().toString(36).substr(2, 9)}`;
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() dismissible = false;
  @Input() showIcon = true;
  @Output() onDismiss = new EventEmitter<void>();

  dismissed = false;

  dismiss(): void {
    this.dismissed = true;
    this.onDismiss.emit();
  }

  getBannerClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'z-50': true,
      'flex': true,
      'justify-between': true,
      'w-full': true,
      'p-4': true
    };

    if (this.position === 'top') {
      baseClasses['fixed'] = true;
      baseClasses['top-0'] = true;
    } else {
      baseClasses['fixed'] = true;
      baseClasses['bottom-0'] = true;
    }

    const colorClasses = this._getColorClasses();
    Object.assign(baseClasses, colorClasses);

    return baseClasses;
  }

  getIconClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'mr-3': true,
      'w-5': true,
      'h-5': true
    };

    const colorClasses = this._getIconColorClasses();
    Object.assign(baseClasses, colorClasses);

    return baseClasses;
  }

  getTextClasses(): { [key: string]: boolean } {
    return {
      'text-sm': true,
      'font-medium': true
    };
  }

  getCloseButtonClasses(): { [key: string]: boolean } {
    return {
      'inline-flex': true,
      'items-center': true,
      'justify-center': true,
      'w-7': true,
      'h-7': true,
      'text-sm': true,
      'bg-transparent': true,
      'rounded-lg': true,
      'hover:bg-gray-200': true,
      'hover:text-gray-900': true,
      'dark:hover:bg-gray-600': true,
      'dark:hover:text-white': true
    };
  }

  get iconPath(): string {
    const paths: { [key: string]: string } = {
      blue: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
      green: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      red: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      yellow: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      purple: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      pink: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z'
    };
    return paths[this.color] || paths['blue'];
  }

  private _getColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      blue: {
        'bg-blue-50': true,
        'border-b': true,
        'border-blue-200': true,
        'text-blue-800': true,
        'dark:bg-blue-200/10': true,
        'dark:text-blue-400': true,
        'dark:border-blue-800': true
      },
      green: {
        'bg-green-50': true,
        'border-b': true,
        'border-green-200': true,
        'text-green-800': true,
        'dark:bg-green-200/10': true,
        'dark:text-green-400': true,
        'dark:border-green-800': true
      },
      red: {
        'bg-red-50': true,
        'border-b': true,
        'border-red-200': true,
        'text-red-800': true,
        'dark:bg-red-200/10': true,
        'dark:text-red-400': true,
        'dark:border-red-800': true
      },
      yellow: {
        'bg-yellow-50': true,
        'border-b': true,
        'border-yellow-200': true,
        'text-yellow-800': true,
        'dark:bg-yellow-200/10': true,
        'dark:text-yellow-400': true,
        'dark:border-yellow-800': true
      },
      purple: {
        'bg-purple-50': true,
        'border-b': true,
        'border-purple-200': true,
        'text-purple-800': true,
        'dark:bg-purple-200/10': true,
        'dark:text-purple-400': true,
        'dark:border-purple-800': true
      },
      pink: {
        'bg-pink-50': true,
        'border-b': true,
        'border-pink-200': true,
        'text-pink-800': true,
        'dark:bg-pink-200/10': true,
        'dark:text-pink-400': true,
        'dark:border-pink-800': true
      }
    };
    return colors[this.color] || colors['blue'];
  }

  private _getIconColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      blue: { 'text-blue-400': true },
      green: { 'text-green-400': true },
      red: { 'text-red-400': true },
      yellow: { 'text-yellow-400': true },
      purple: { 'text-purple-400': true },
      pink: { 'text-pink-400': true }
    };
    return colors[this.color] || colors['blue'];
  }
}

