import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-indicator',
  template: `
    <span [class]="indicatorClasses" [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
      position: relative;
    }
  `]
})
export class NgfIndicatorComponent {
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'gray' = 'blue';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() pulse = false;
  @Input() ariaLabel?: string;

  get indicatorClasses(): string {
    const base = 'absolute flex items-center justify-center text-white font-medium rounded-full';
    const positionClasses = {
      'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
      'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
      'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'
    };
    const sizeClasses = {
      xs: 'w-2 h-2 text-xs',
      sm: 'w-3 h-3 text-xs',
      md: 'w-3.5 h-3.5 text-xs',
      lg: 'w-4 h-4 text-sm'
    };
    const colorClasses = this._getColorClasses();
    const pulseClass = this.pulse ? 'animate-pulse' : '';
    return `${base} ${positionClasses[this.position]} ${sizeClasses[this.size]} ${colorClasses} ${pulseClass}`.trim();
  }

  private _getColorClasses(): string {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-400',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      gray: 'bg-gray-500'
    };
    return colors[this.color];
  }
}

@Component({
  selector: 'ngf-indicator-wrapper',
  template: `
    <div class="relative inline-block">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfIndicatorWrapperComponent {}

