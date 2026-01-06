import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-blockquote',
  standalone: true,
  imports: [CommonModule],
  template: `
    <blockquote [class]="blockquoteClasses">
      <p [class]="textClasses">
        <ng-content></ng-content>
      </p>
      <footer *ngIf="author" [class]="footerClasses">
        <cite [class]="citeClasses">{{ author }}</cite>
      </footer>
    </blockquote>
  `
})
export class NgfBlockquoteComponent {
  @Input() author?: string;
  @Input() size: 'sm' | 'base' | 'lg' = 'base';

  get blockquoteClasses(): string {
    return 'p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800';
  }

  get textClasses(): string {
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    };
    return `${sizeClasses[this.size]} italic font-medium leading-relaxed text-gray-900 dark:text-white`.trim();
  }

  get footerClasses(): string {
    return 'mt-4 text-sm text-gray-500 dark:text-gray-400';
  }

  get citeClasses(): string {
    return 'font-semibold text-gray-900 dark:text-white';
  }
}

