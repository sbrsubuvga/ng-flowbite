import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-kbd',
  template: `
    <kbd [class]="kbdClasses">
      <ng-content></ng-content>
    </kbd>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NgfKbdComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'default';

  get kbdClasses(): string {
    const base = 'px-2 py-1.5 font-semibold border rounded-lg';
    const sizeClasses = {
      xs: 'text-xs px-1.5 py-1',
      sm: 'text-sm px-2 py-1',
      md: 'text-sm px-2 py-1.5',
      lg: 'text-base px-3 py-2'
    };
    const colorClasses = this._getColorClasses();
    return `${base} ${sizeClasses[this.size]} ${colorClasses}`.trim();
  }

  private _getColorClasses(): string {
    const colors = {
      default: 'text-gray-800 bg-gray-100 border-gray-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500',
      blue: 'text-blue-800 bg-blue-100 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-800',
      green: 'text-green-800 bg-green-100 border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-800',
      red: 'text-red-800 bg-red-100 border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-800',
      yellow: 'text-yellow-800 bg-yellow-100 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800',
      purple: 'text-purple-800 bg-purple-100 border-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:border-purple-800',
      pink: 'text-pink-800 bg-pink-100 border-pink-200 dark:bg-pink-900 dark:text-pink-100 dark:border-pink-800'
    };
    return colors[this.color];
  }
}

@Component({
  selector: 'ngf-kbd-group',
  template: `
    <span class="inline-flex items-center gap-1">
      <ng-content></ng-content>
    </span>
  `
})
export class NgfKbdGroupComponent {}

