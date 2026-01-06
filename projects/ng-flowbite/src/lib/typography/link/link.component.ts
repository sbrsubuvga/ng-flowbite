import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a
      [href]="href"
      [routerLink]="routerLink"
      [routerLinkActive]="routerLinkActive || ''"
      [target]="target"
      [rel]="rel"
      [class]="linkClasses"
      [attr.aria-label]="ariaLabel"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class NgfLinkComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() routerLinkActive?: string;
  @Input() target?: '_blank' | '_self' | '_parent' | '_top';
  @Input() rel?: string;
  @Input() color: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'default';
  @Input() underline: 'none' | 'hover' | 'always' = 'hover';
  @Input() size: 'sm' | 'base' | 'lg' = 'base';
  @Input() ariaLabel?: string;

  get linkClasses(): string {
    const base = 'font-medium';
    
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    };
    
    const colorClasses = {
      default: 'text-blue-600 dark:text-blue-500',
      blue: 'text-blue-600 dark:text-blue-500',
      green: 'text-green-600 dark:text-green-400',
      red: 'text-red-600 dark:text-red-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      purple: 'text-purple-600 dark:text-purple-400',
      pink: 'text-pink-600 dark:text-pink-400'
    };
    
    const underlineClasses = {
      none: 'no-underline',
      hover: 'hover:underline',
      always: 'underline'
    };
    
    const hoverClasses = {
      default: 'hover:text-blue-800 dark:hover:text-blue-400',
      blue: 'hover:text-blue-800 dark:hover:text-blue-400',
      green: 'hover:text-green-800 dark:hover:text-green-300',
      red: 'hover:text-red-800 dark:hover:text-red-300',
      yellow: 'hover:text-yellow-800 dark:hover:text-yellow-300',
      purple: 'hover:text-purple-800 dark:hover:text-purple-300',
      pink: 'hover:text-pink-800 dark:hover:text-pink-300'
    };
    
    return `${base} ${sizeClasses[this.size]} ${colorClasses[this.color]} ${underlineClasses[this.underline]} ${hoverClasses[this.color]}`.trim();
  }
}

