import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-button-group',
  template: `
    <div [class]="groupClasses" role="group">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfButtonGroupComponent {
  @Input() outline = false;
  @Input() pill = false;

  get groupClasses(): string {
    const base = 'inline-flex';
    const pillClass = this.pill ? 'rounded-lg' : 'rounded-md';
    return `${base} ${pillClass} shadow-sm`.trim();
  }
}

@Component({
  selector: 'ngf-button-group-item',
  template: `
    <button
      type="button"
      [class]="itemClasses"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class NgfButtonGroupItemComponent {
  @Input() active = false;
  @Input() disabled = false;
  @Input() position: 'start' | 'middle' | 'end' = 'middle';
  @Output() onClick = new EventEmitter<MouseEvent>();

  get itemClasses(): string {
    const base = 'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200';
    const positionClasses = {
      start: 'rounded-l-lg',
      middle: 'border-t border-b',
      end: 'rounded-r-lg'
    };
    const activeClass = this.active
      ? 'bg-blue-600 text-white border-blue-600'
      : 'hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 focus:dark:ring-blue-500 focus:dark:text-white';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return `${base} ${positionClasses[this.position]} ${activeClass} ${disabledClass}`.trim();
  }
}

