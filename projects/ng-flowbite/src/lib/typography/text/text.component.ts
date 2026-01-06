import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="textClasses">
      <ng-content></ng-content>
    </span>
  `
})
export class NgfTextComponent {
  @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
  @Input() weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  @Input() color: 'default' | 'gray' | 'muted' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'default';
  @Input() italic = false;
  @Input() underline = false;
  @Input() strikethrough = false;
  @Input() uppercase = false;
  @Input() lowercase = false;
  @Input() capitalize = false;

  get textClasses(): string {
    const base = '';
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };
    
    const weightClass = this.weight ? `font-${this.weight}` : '';
    
    const colorClasses = {
      default: 'text-gray-900 dark:text-white',
      gray: 'text-gray-700 dark:text-gray-300',
      muted: 'text-gray-500 dark:text-gray-400',
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      red: 'text-red-600 dark:text-red-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      purple: 'text-purple-600 dark:text-purple-400',
      pink: 'text-pink-600 dark:text-pink-400'
    };
    
    const styleClasses = [
      this.italic ? 'italic' : '',
      this.underline ? 'underline' : '',
      this.strikethrough ? 'line-through' : '',
      this.uppercase ? 'uppercase' : '',
      this.lowercase ? 'lowercase' : '',
      this.capitalize ? 'capitalize' : ''
    ].filter(Boolean).join(' ');
    
    return `${base} ${sizeClasses[this.size]} ${weightClass} ${colorClasses[this.color]} ${styleClasses}`.trim();
  }
}

