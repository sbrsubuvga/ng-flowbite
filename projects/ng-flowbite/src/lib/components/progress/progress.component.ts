import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        [class]="progressBarClasses"
        [style.width.%]="value"
        role="progressbar"
        [attr.aria-valuenow]="value"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span *ngIf="showLabel" class="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">{{ value }}%</span>
      </div>
    </div>
  `
})
export class NgfProgressComponent {
  @Input() value = 0;
  @Input() color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showLabel = false;

  get progressBarClasses(): string {
    const base = 'h-2.5 rounded-full';
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2.5',
      lg: 'h-4'
    };
    const colorClasses = this._getColorClasses();
    return `${base} ${sizeClasses[this.size]} ${colorClasses}`.trim();
  }

  private _getColorClasses(): string {
    const colors = {
      blue: 'bg-blue-600',
      gray: 'bg-gray-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-400',
      purple: 'bg-purple-600',
      pink: 'bg-pink-600'
    };
    return colors[this.color];
  }
}

