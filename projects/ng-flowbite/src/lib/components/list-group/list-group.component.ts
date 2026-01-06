import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-list-group',
  template: `
    <ul [class]="listClasses">
      <ng-content></ng-content>
    </ul>
  `
})
export class NgfListGroupComponent {
  @Input() flush = false;

  get listClasses(): string {
    const base = 'w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white';
    const flushClass = this.flush ? '!border-0 !rounded-none' : '';
    return `${base} ${flushClass}`.trim();
  }
}

@Component({
  selector: 'ngf-list-group-item',
  template: `
    <li [class]="itemClasses">
      <ng-content></ng-content>
    </li>
  `
})
export class NgfListGroupItemComponent {
  @Input() active = false;
  @Input() disabled = false;
  @Input() href?: string;
  @Input() routerLink?: string;

  get itemClasses(): string {
    const base = 'w-full px-4 py-3 border-b border-gray-200 dark:border-gray-600';
    const activeClass = this.active
      ? 'bg-blue-600 text-white dark:bg-gray-800'
      : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    return `${base} ${activeClass} ${disabledClass}`.trim();
  }
}

