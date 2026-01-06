import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-button',
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class]="buttonClasses"
      (click)="onClick.emit($event)"
      [attr.aria-disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NgfButtonComponent {
  @Input() color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() outline = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() pill = false;
  @Input() square = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const baseClasses = 'font-medium rounded-lg text-center focus:ring-4 focus:outline-none';
    const sizeClasses = {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base'
    };
    const colorClasses = this._getColorClasses();
    const shapeClasses = this.pill ? 'rounded-full' : this.square ? 'rounded-none' : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${colorClasses} ${shapeClasses}`.trim();
  }

  private _getColorClasses(): string {
    if (this.outline) {
      const outlineColors = {
        blue: 'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800',
        gray: 'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700',
        green: 'text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800',
        red: 'text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800',
        yellow: 'text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-900',
        purple: 'text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-purple-300 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800',
        pink: 'text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white focus:ring-pink-300 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-800'
      };
      return outlineColors[this.color];
    } else {
      const solidColors = {
        blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        gray: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
        green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
        yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
        purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
        pink: 'text-white bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'
      };
      return solidColors[this.color];
    }
  }
}

