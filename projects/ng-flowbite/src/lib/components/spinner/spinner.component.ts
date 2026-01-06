import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="spinnerClasses" role="status">
      <svg
        *ngIf="type === 'default'"
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600"
        [class]="colorClasses"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <svg
        *ngIf="type === 'pulse'"
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-pulse dark:text-gray-600"
        [class]="colorClasses"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.05 13a1 1 0 0 1-.366-1.366 6 6 0 0 1 11.31 0 1 1 0 0 1-.366 1.366 6 6 0 0 1-10.578 0ZM8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z"/>
      </svg>
      <span *ngIf="showText" class="sr-only">{{ text }}</span>
    </div>
  `
})
export class NgfSpinnerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  @Input() type: 'default' | 'pulse' = 'default';
  @Input() showText = false;
  @Input() text = 'Loading...';

  get spinnerClasses(): string {
    const sizeClasses = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    };
    return sizeClasses[this.size];
  }

  get colorClasses(): string {
    const colors = {
      blue: 'fill-blue-600',
      gray: 'fill-gray-600',
      green: 'fill-green-600',
      red: 'fill-red-600',
      yellow: 'fill-yellow-400',
      purple: 'fill-purple-600',
      pink: 'fill-pink-600'
    };
    return colors[this.color];
  }
}

