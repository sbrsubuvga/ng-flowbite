import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-hr',
  standalone: true,
  imports: [CommonModule],
  template: `
    <hr [class]="hrClasses" [attr.aria-label]="ariaLabel" />
  `
})
export class NgfHrComponent {
  @Input() color: 'default' | 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'default';
  @Input() size: 'thin' | 'medium' | 'thick' = 'medium';
  @Input() spacing: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() dashed = false;
  @Input() ariaLabel?: string;

  get hrClasses(): string {
    const base = 'border-t';
    
    const colorClasses = {
      default: 'border-gray-200 dark:border-gray-700',
      gray: 'border-gray-300 dark:border-gray-600',
      blue: 'border-blue-300 dark:border-blue-700',
      green: 'border-green-300 dark:border-green-700',
      red: 'border-red-300 dark:border-red-700',
      yellow: 'border-yellow-300 dark:border-yellow-700',
      purple: 'border-purple-300 dark:border-purple-700',
      pink: 'border-pink-300 dark:border-pink-700'
    };
    
    const sizeClasses = {
      thin: 'border-t',
      medium: 'border-t-2',
      thick: 'border-t-4'
    };
    
    const spacingClasses = {
      none: 'my-0',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
      xl: 'my-8'
    };
    
    const dashedClass = this.dashed ? 'border-dashed' : 'border-solid';
    
    return `${base} ${colorClasses[this.color]} ${sizeClasses[this.size]} ${spacingClasses[this.spacing]} ${dashedClass}`.trim();
  }
}

