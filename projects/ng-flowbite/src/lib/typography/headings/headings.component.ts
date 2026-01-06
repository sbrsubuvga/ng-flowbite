import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1
      *ngIf="level === 1"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h1>
    <h2
      *ngIf="level === 2"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h2>
    <h3
      *ngIf="level === 3"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h3>
    <h4
      *ngIf="level === 4"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h4>
    <h5
      *ngIf="level === 5"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h5>
    <h6
      *ngIf="level === 6"
      [class]="headingClasses"
      [id]="headingId"
    >
      <ng-content></ng-content>
    </h6>
  `
})
export class NgfHeadingComponent {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Input() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  @Input() weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  @Input() color?: 'default' | 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink';
  @Input() headingId?: string;

  get headingClasses(): string {
    const base = 'mb-2 font-bold tracking-tight text-gray-900 dark:text-white';
    
    // Size classes
    const sizeMap = {
      1: 'text-5xl',
      2: 'text-4xl',
      3: 'text-3xl',
      4: 'text-2xl',
      5: 'text-xl',
      6: 'text-lg'
    };
    
    const sizeClass = this.size 
      ? `text-${this.size}`
      : sizeMap[this.level];
    
    // Weight classes
    const weightClass = this.weight 
      ? `font-${this.weight}`
      : 'font-bold';
    
    // Color classes
    const colorClasses = {
      default: 'text-gray-900 dark:text-white',
      gray: 'text-gray-700 dark:text-gray-300',
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      red: 'text-red-600 dark:text-red-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      purple: 'text-purple-600 dark:text-purple-400',
      pink: 'text-pink-600 dark:text-pink-400'
    };
    
    const colorClass = this.color 
      ? colorClasses[this.color]
      : colorClasses.default;
    
    return `${base} ${sizeClass} ${weightClass} ${colorClass}`.trim();
  }
}

