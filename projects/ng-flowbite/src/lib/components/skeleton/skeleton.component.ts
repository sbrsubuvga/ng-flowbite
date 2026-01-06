import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-skeleton',
  template: `
    <div [class]="skeletonClasses" [style.width]="width" [style.height]="height">
      <span class="sr-only">{{ text }}</span>
    </div>
  `
})
export class NgfSkeletonComponent {
  @Input() type: 'default' | 'text' | 'avatar' | 'button' | 'card' = 'default';
  @Input() width?: string;
  @Input() height?: string;
  @Input() rounded = true;
  @Input() text = 'Loading...';

  get skeletonClasses(): string {
    const base = 'animate-pulse bg-gray-200 dark:bg-gray-700';
    const typeClasses = {
      default: 'h-4',
      text: 'h-4',
      avatar: 'rounded-full',
      button: 'h-10',
      card: 'h-48'
    };
    const roundedClass = this.rounded && this.type !== 'avatar' ? 'rounded' : '';
    return `${base} ${typeClasses[this.type]} ${roundedClass}`.trim();
  }
}

