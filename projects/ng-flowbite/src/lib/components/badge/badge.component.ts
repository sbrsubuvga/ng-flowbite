import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [ngClass]="getBadgeClasses()">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NgfBadgeComponent {
  @Input() color: 'brand' | 'alternative' | 'gray' | 'danger' | 'success' | 'warning' = 'brand';
  @Input() size: 'xs' | 'sm' | 'lg' = 'sm';
  @Input() pill = false;
  @Input() border = false;
  @Input() useRing = false; // For large bordered badges with ring

  getBadgeClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'inline-flex': true,
      'items-center': true,
      'font-medium': true
    };

    // Size classes
    const sizeClasses = this._getSizeClasses();
    Object.assign(baseClasses, sizeClasses);

    // Ring classes for large bordered badges
    if (this.useRing) {
      baseClasses['ring-1'] = true;
      baseClasses['ring-inset'] = true;
    }

    // Border classes (only if not using ring)
    if (!this.useRing) {
      if (this.border) {
        baseClasses['border'] = true;
      } else {
        baseClasses['border-0'] = true;
      }
    }

    // Pill classes
    if (this.pill) {
      baseClasses['rounded-full'] = true;
    } else {
      baseClasses['rounded'] = true;
    }

    // Color classes
    const colorClasses = this._getColorClasses();
    Object.assign(baseClasses, colorClasses);

    return baseClasses;
  }

  private _getSizeClasses(): { [key: string]: boolean } {
    const sizes: { [key: string]: { [key: string]: boolean } } = {
      xs: { 'p-1': true, 'text-xs': true },
      sm: { 'p-1.5': true, 'text-sm': true },
      lg: { 'px-2': true, 'py-1': true, 'text-sm': true }
    };
    return sizes[this.size] || sizes['sm'];
  }

  private _getColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      brand: {
        'bg-indigo-100': true,
        'text-indigo-800': true,
        'dark:bg-indigo-800': true,
        'dark:text-indigo-100': true,
        'border-indigo-300': !this.useRing,
        'dark:border-indigo-900': !this.useRing,
        'ring-indigo-300': this.useRing,
        'dark:ring-indigo-900': this.useRing
      },
      alternative: {
        'bg-gray-50': true,
        'text-gray-800': true,
        'dark:bg-gray-700': true,
        'dark:text-gray-100': true,
        'border-gray-200': !this.useRing,
        'dark:border-gray-600': !this.useRing,
        'ring-gray-200': this.useRing,
        'dark:ring-gray-600': this.useRing
      },
      gray: {
        'bg-gray-100': true,
        'text-gray-800': true,
        'dark:bg-gray-800': true,
        'dark:text-gray-100': true,
        'border-gray-300': !this.useRing,
        'dark:border-gray-900': !this.useRing,
        'ring-gray-300': this.useRing,
        'dark:ring-gray-900': this.useRing
      },
      danger: {
        'bg-red-100': true,
        'text-red-800': true,
        'dark:bg-red-800': true,
        'dark:text-red-100': true,
        'border-red-300': !this.useRing,
        'dark:border-red-900': !this.useRing,
        'ring-red-300': this.useRing,
        'dark:ring-red-900': this.useRing
      },
      success: {
        'bg-green-100': true,
        'text-green-800': true,
        'dark:bg-green-800': true,
        'dark:text-green-100': true,
        'border-green-300': !this.useRing,
        'dark:border-green-900': !this.useRing,
        'ring-green-300': this.useRing,
        'dark:ring-green-900': this.useRing
      },
      warning: {
        'bg-yellow-100': true,
        'text-yellow-800': true,
        'dark:bg-yellow-800': true,
        'dark:text-yellow-100': true,
        'border-yellow-300': !this.useRing,
        'dark:border-yellow-900': !this.useRing,
        'ring-yellow-300': this.useRing,
        'dark:ring-yellow-900': this.useRing
      }
    };
    return colors[this.color] || colors['brand'];
  }
}

