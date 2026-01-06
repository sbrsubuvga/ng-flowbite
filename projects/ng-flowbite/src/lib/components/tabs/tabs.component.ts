import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-tabs',
  template: `
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" [attr.aria-label]="ariaLabel">
        <ng-content></ng-content>
      </ul>
    </div>
    <div class="mt-4">
      <ng-content select="[ngfTabContent]"></ng-content>
    </div>
  `
})
export class NgfTabsComponent {
  @Input() ariaLabel?: string;
  @Input() activeTabId?: string;
  @Output() tabChange = new EventEmitter<string>();
}

@Component({
  selector: 'ngf-tab',
  template: `
    <li>
      <button
        type="button"
        [id]="tabId"
        [class]="tabClasses"
        (click)="activate()"
        [attr.aria-selected]="active"
        role="tab"
        [attr.aria-controls]="contentId"
      >
        <ng-content></ng-content>
      </button>
    </li>
  `
})
export class NgfTabComponent {
  @Input() tabId!: string;
  @Input() contentId!: string;
  @Input() active = false;
  @Input() disabled = false;
  @Input() pill = false;
  @Input() underline = true;

  get tabClasses(): string {
    const base = 'inline-block p-4 border-b-2 rounded-t-lg';
    const activeClass = this.active
      ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
      : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300';
    const pillClass = this.pill ? 'rounded-t-lg' : '';
    const underlineClass = this.underline ? '' : 'border-b-0';
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';

    return `${base} ${activeClass} ${pillClass} ${underlineClass} ${disabledClass}`.trim();
  }

  activate(): void {
    if (!this.disabled) {
      // This will be handled by parent component
    }
  }
}

@Component({
  selector: 'ngf-tab-content',
  template: `
    <div
      [id]="contentId"
      [class.hidden]="!isActive"
      role="tabpanel"
      [attr.aria-labelledby]="tabId"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class NgfTabContentComponent {
  @Input() contentId!: string;
  @Input() tabId!: string;
  @Input() isActive = false;
}

