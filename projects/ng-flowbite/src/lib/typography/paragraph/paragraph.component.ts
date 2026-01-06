import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-paragraph',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class]="paragraphClasses">
      <ng-content></ng-content>
    </p>
  `
})
export class NgfParagraphComponent {
  @Input() size: 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() color: 'default' | 'gray' | 'muted' = 'default';
  @Input() align: 'left' | 'center' | 'right' | 'justify' = 'left';
  @Input() leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

  get paragraphClasses(): string {
    const base = 'mb-4';
    
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };
    
    const colorClasses = {
      default: 'text-gray-900 dark:text-white',
      gray: 'text-gray-700 dark:text-gray-300',
      muted: 'text-gray-500 dark:text-gray-400'
    };
    
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    };
    
    const leadingClass = this.leading 
      ? `leading-${this.leading}`
      : '';
    
    return `${base} ${sizeClasses[this.size]} ${colorClasses[this.color]} ${alignClasses[this.align]} ${leadingClass}`.trim();
  }
}

