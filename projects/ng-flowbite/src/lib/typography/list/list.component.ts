import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul *ngIf="type === 'unordered'" [class]="listClasses">
      <ng-content></ng-content>
    </ul>
    <ol *ngIf="type === 'ordered'" [class]="listClasses" [type]="listType">
      <ng-content></ng-content>
    </ol>
    <dl *ngIf="type === 'description'" [class]="listClasses">
      <ng-content></ng-content>
    </dl>
  `
})
export class NgfListComponent {
  @Input() type: 'unordered' | 'ordered' | 'description' = 'unordered';
  @Input() spacing: 'none' | 'tight' | 'normal' | 'loose' = 'normal';
  @Input() listType?: '1' | 'a' | 'A' | 'i' | 'I';
  @Input() unstyled = false;

  get listClasses(): string {
    const base = this.unstyled ? '' : 'space-y-1';
    
    const spacingClasses = {
      none: 'space-y-0',
      tight: 'space-y-1',
      normal: 'space-y-2',
      loose: 'space-y-4'
    };
    
    const typeClasses = {
      unordered: 'list-disc list-inside text-gray-900 dark:text-white',
      ordered: 'list-decimal list-inside text-gray-900 dark:text-white',
      description: 'text-gray-900 dark:text-white'
    };
    
    const spacingClass = this.unstyled ? '' : spacingClasses[this.spacing];
    const typeClass = this.unstyled ? '' : typeClasses[this.type];
    
    return `${base} ${spacingClass} ${typeClass}`.trim();
  }
}

@Component({
  selector: 'ngf-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li [class]="itemClasses">
      <ng-content></ng-content>
    </li>
  `
})
export class NgfListItemComponent {
  @Input() marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';

  get itemClasses(): string {
    const markerClasses = {
      disc: 'list-disc',
      circle: 'list-circle',
      square: 'list-square',
      decimal: 'list-decimal',
      'lower-alpha': 'list-[lower-alpha]',
      'upper-alpha': 'list-[upper-alpha]',
      'lower-roman': 'list-[lower-roman]',
      'upper-roman': 'list-[upper-roman]'
    };
    
    return this.marker ? markerClasses[this.marker] : '';
  }
}

@Component({
  selector: 'ngf-description-term',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dt [class]="termClasses">
      <ng-content></ng-content>
    </dt>
  `
})
export class NgfDescriptionTermComponent {
  get termClasses(): string {
    return 'mb-2 text-lg font-semibold text-gray-900 dark:text-white';
  }
}

@Component({
  selector: 'ngf-description-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dd [class]="detailsClasses">
      <ng-content></ng-content>
    </dd>
  `
})
export class NgfDescriptionDetailsComponent {
  @Input() indent = true;

  get detailsClasses(): string {
    const base = 'mb-4 text-gray-500 dark:text-gray-400';
    const indentClass = this.indent ? 'ml-6' : '';
    return `${base} ${indentClass}`.trim();
  }
}

