import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [id]="bannerId" [class]="bannerClasses" role="banner">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            *ngIf="showIcon"
            [class]="iconClasses"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path [attr.d]="iconPath"></path>
          </svg>
          <p [class]="textClasses">
            <ng-content></ng-content>
          </p>
        </div>
        <button
          *ngIf="dismissible"
          type="button"
          [class]="closeButtonClasses"
          (click)="onDismiss.emit()"
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

  get bannerClasses(): string {
    const base = 'z-50 flex justify-between w-full p-4';
    const positionClass = this.position === 'top' ? 'fixed top-0' : 'fixed bottom-0';
    const colorClasses = this._getColorClasses();
    return `${base} ${positionClass} ${colorClasses}`.trim();
  }

  get iconClasses(): string {
    const base = 'mr-3 w-5 h-5';
    const colorClasses = this._getIconColorClasses();
    return `${base} ${colorClasses}`.trim();
  }

  get textClasses(): string {
    return 'text-sm font-medium';
  }

  get closeButtonClasses(): string {
    return 'inline-flex items-center justify-center w-7 h-7 text-sm bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white';
  }

  get iconPath(): string {
    const paths = {
      blue: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
      green: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      red: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      yellow: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      purple: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      pink: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z'
    };
    return paths[this.color];
  }

  private _getColorClasses(): string {
    const colors = {
      blue: 'bg-blue-50 border-b border-blue-200 text-blue-800 dark:bg-blue-200/10 dark:text-blue-400 dark:border-blue-800',
      green: 'bg-green-50 border-b border-green-200 text-green-800 dark:bg-green-200/10 dark:text-green-400 dark:border-green-800',
      red: 'bg-red-50 border-b border-red-200 text-red-800 dark:bg-red-200/10 dark:text-red-400 dark:border-red-800',
      yellow: 'bg-yellow-50 border-b border-yellow-200 text-yellow-800 dark:bg-yellow-200/10 dark:text-yellow-400 dark:border-yellow-800',
      purple: 'bg-purple-50 border-b border-purple-200 text-purple-800 dark:bg-purple-200/10 dark:text-purple-400 dark:border-purple-800',
      pink: 'bg-pink-50 border-b border-pink-200 text-pink-800 dark:bg-pink-200/10 dark:text-pink-400 dark:border-pink-800'
    };
    return colors[this.color];
  }

  private _getIconColorClasses(): string {
    const colors = {
      blue: 'text-blue-400',
      green: 'text-green-400',
      red: 'text-red-400',
      yellow: 'text-yellow-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400'
    };
    return colors[this.color];
  }
}

