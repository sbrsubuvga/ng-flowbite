import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="!dismissed"
      [ngClass]="getAlertClasses()"
      role="alert"
      [attr.aria-live]="dismissible ? 'assertive' : 'polite'"
    >
      <div class="flex items-center">
        <svg
          *ngIf="showIcon"
          [ngClass]="getIconClasses()"
          class="first:mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path [attr.d]="iconPath"></path>
        </svg>
        <div class="flex items-center justify-between text-sm font-normal flex-1" [ngClass]="getContentColorClasses()">
          <ng-content></ng-content>
        </div>
        <button
          *ngIf="dismissible"
          type="button"
          [ngClass]="getCloseButtonClasses()"
          class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:outline-none p-1.5 inline-flex h-8 w-8 items-center justify-center transition-colors cursor-pointer"
          (click)="dismiss()"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  `
})
export class NgfAlertComponent {
  @Input() color: 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary' = 'default';
  @Input() dismissible = false;
  @Input() showIcon = true;
  @Input() border = false;
  @Input() accent = false;
  @Output() onDismiss = new EventEmitter<void>();

  dismissed = false;

  dismiss(): void {
    this.dismissed = true;
    this.onDismiss.emit();
  }

  get iconPath(): string {
    const paths = {
      default: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      info: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
      failure: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      success: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      warning: 'M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5ZM9.5 4a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V4ZM11 12a1 1 0 11-2 0 1 1 0 012 0Z',
      primary: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
    };
    return paths[this.color];
  }

  getAlertClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'mb-4': true,
      'rounded-lg': true,
      'p-4': true
    };

    // Border
    if (this.border) {
      baseClasses['border'] = true;
    } else {
      baseClasses['border-0'] = true;
    }

    // Accent (top border)
    if (this.accent) {
      baseClasses['border-t-4'] = true;
    }

    // Color classes
    const colorClasses = this._getColorClasses();
    Object.assign(baseClasses, colorClasses);

    return baseClasses;
  }

  getContentColorClasses(): { [key: string]: boolean } {
    return this._getContentColorClasses();
  }

  getIconClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'flex-shrink-0': true,
      'w-4': true,
      'h-4': true
    };

    const colorClasses = this._getIconColorClasses();
    Object.assign(baseClasses, colorClasses);

    return baseClasses;
  }

  getCloseButtonClasses(): { [key: string]: boolean } {
    return this._getCloseButtonClasses();
  }

  private _getColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'border-gray-200': true,
        'bg-gray-50': true,
        'dark:border-gray-700': true,
        'dark:bg-gray-950': true
      },
      info: {
        'border-blue-200': true,
        'bg-blue-50': true,
        'dark:border-blue-700': true,
        'dark:bg-blue-950': true
      },
      failure: {
        'border-red-200': true,
        'bg-red-50': true,
        'dark:border-red-700': true,
        'dark:bg-red-950': true
      },
      success: {
        'border-green-200': true,
        'bg-green-50': true,
        'dark:border-green-700': true,
        'dark:bg-green-950': true
      },
      warning: {
        'border-yellow-200': true,
        'bg-yellow-50': true,
        'dark:border-yellow-700': true,
        'dark:bg-yellow-950': true
      },
      primary: {
        'bg-primary-50': true,
        'border-primary-200': true,
        'dark:bg-primary-950': true,
        'dark:border-primary-700': true
      }
    };
    return colors[this.color] || colors['default'];
  }

  private _getContentColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'text-gray-800': true,
        'dark:text-gray-300': true
      },
      info: {
        'text-blue-800': true,
        'dark:text-blue-300': true
      },
      failure: {
        'text-red-800': true,
        'dark:text-red-300': true
      },
      success: {
        'text-green-800': true,
        'dark:text-green-300': true
      },
      warning: {
        'text-yellow-800': true,
        'dark:text-yellow-300': true
      },
      primary: {
        'text-primary-800': true,
        'dark:text-primary-300': true
      }
    };
    return colors[this.color] || colors['default'];
  }

  private _getIconColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'text-gray-400': true
      },
      info: {
        'text-blue-400': true
      },
      failure: {
        'text-red-400': true
      },
      success: {
        'text-green-400': true
      },
      warning: {
        'text-yellow-400': true
      },
      primary: {
        'text-primary-400': true
      }
    };
    return colors[this.color] || colors['default'];
  }

  private _getCloseButtonClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'hover:bg-gray-300': true,
        'dark:hover:bg-gray-600': true
      },
      info: {
        'hover:bg-blue-300': true,
        'dark:hover:bg-blue-700': true
      },
      failure: {
        'hover:bg-red-300': true,
        'dark:hover:bg-red-700': true
      },
      success: {
        'hover:bg-green-300': true,
        'dark:hover:bg-green-600': true
      },
      warning: {
        'hover:bg-yellow-300': true,
        'dark:hover:bg-yellow-600': true
      },
      primary: {
        'hover:bg-primary-300': true,
        'dark:hover:bg-primary-700': true
      }
    };
    return colors[this.color] || colors['default'];
  }
}

