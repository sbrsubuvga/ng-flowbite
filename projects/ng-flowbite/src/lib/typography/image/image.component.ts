import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      [src]="src"
      [alt]="alt"
      [class]="imageClasses"
      [width]="width"
      [height]="height"
      [loading]="loading"
      [attr.aria-label]="ariaLabel"
    />
  `
})
export class NgfImageComponent {
  @Input() src!: string;
  @Input() alt = '';
  @Input() width?: number | string;
  @Input() height?: number | string;
  @Input() rounded = false;
  @Input() shadow = false;
  @Input() responsive = true;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() ariaLabel?: string;
  @Input() size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  get imageClasses(): string {
    const base = 'h-auto';
    
    const roundedClass = this.rounded ? 'rounded-lg' : '';
    const shadowClass = this.shadow ? 'shadow-lg dark:shadow-gray-800' : '';
    const responsiveClass = this.responsive ? 'max-w-full' : '';
    
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'w-full'
    };
    
    const sizeClass = this.size ? sizeClasses[this.size] : '';
    
    return `${base} ${roundedClass} ${shadowClass} ${responsiveClass} ${sizeClass}`.trim();
  }
}

