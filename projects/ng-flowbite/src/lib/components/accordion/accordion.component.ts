import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [id]="accordionId"
      [attr.data-accordion]="getDataAccordionValue()"
      [ngClass]="{
        'rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800': type === 'default' || type === 'always-open',
        '': type === 'separated' || type === 'flush'
      }"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class NgfAccordionComponent implements AfterContentInit {
  @Input() closeOthers = false;
  @Input() type: 'default' | 'flush' | 'always-open' | 'separated' = 'default';
  @Input() accordionId = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  
  @ContentChildren(forwardRef(() => NgfAccordionItemComponent)) items!: QueryList<NgfAccordionItemComponent>;

  ngAfterContentInit(): void {
    if (this.items) {
      this.updateItems();
      
      // Update when items change
      this.items.changes.subscribe(() => {
        this.updateItems();
      });
    }
  }

  private updateItems(): void {
    const itemsArray = this.items.toArray();
    itemsArray.forEach((item, index) => {
      item.accordion = this;
          item.isSeparated = this.isSeparated;
      item.isFirst = index === 0;
      item.isLast = index === itemsArray.length - 1;
      item.isAlwaysOpen = this.type === 'always-open';
      // For always-open type, ensure all items are open
      if (this.type === 'always-open') {
        item.isOpen = true;
      }
    });
  }

  onItemOpened(openedItem: NgfAccordionItemComponent): void {
    if (this.closeOthers && this.type !== 'always-open') {
      this.items.forEach(item => {
        if (item !== openedItem && item.isOpen) {
          item.isOpen = false;
          item.closed.emit();
        }
      });
    }
  }

  getDataAccordionValue(): string {
    if (this.type === 'always-open') {
      return 'open';
    }
    return 'collapse';
  }

  get isSeparated(): boolean {
    return this.type === 'separated';
  }
}

@Component({
  selector: 'ngf-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 [id]="headerId" [class.mt-4]="isSeparated && !isFirst">
      <button
        type="button"
        [ngClass]="getButtonClasses()"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right hover:bg-gray-200 dark:hover:bg-gray-700 gap-3 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
        [attr.data-accordion-target]="'#' + itemId"
        [attr.aria-expanded]="isOpen"
        [attr.aria-controls]="itemId"
        [disabled]="isAlwaysOpen ? false : undefined"
        (click)="toggle()"
      >
        <span><ng-content select="[ngfAccordionHeader]"></ng-content></span>
        <svg
          data-accordion-icon
          class="w-5 h-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform"
          [class.rotate-180]="isOpen"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
        </svg>
      </button>
    </h2>
    <div
      [id]="itemId"
      [ngClass]="{
        'border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg shadow-sm': isSeparated && isOpen,
        'border border-x-0 border-t-0 border-b-gray-200 dark:border-b-gray-700': !isSeparated && !isLast,
        '': !isSeparated && isLast
      }"
      [class.hidden]="!isOpen && !isAlwaysOpen"
      [attr.aria-labelledby]="headerId"
    >
      <div [ngClass]="{
        'p-4 md:p-5': true,
        'border border-t-gray-200 dark:border-t-gray-700 border-b-0 border-x-0': !isSeparated && isLast,
        'bg-white dark:bg-gray-900': true,
        'text-gray-700 dark:text-gray-300': true
      }">
        <ng-content select="[ngfAccordionBody]"></ng-content>
      </div>
    </div>
  `
})
export class NgfAccordionItemComponent {
  @Input() itemId = `accordion-item-${Math.random().toString(36).substr(2, 9)}`;
  @Input() headerId = `accordion-header-${Math.random().toString(36).substr(2, 9)}`;
  @Input() isOpen = false;
  
  accordion: NgfAccordionComponent | null = null;
  isFirst = false;
  isLast = false;
  isSeparated = false;
  isAlwaysOpen = false;

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  constructor() {
    // The accordion property is set by the parent NgfAccordionComponent via updateItems()
  }

  toggle(): void {
    if (this.isAlwaysOpen) {
      return; // Don't allow toggling when always open
    }

    const wasOpen = this.isOpen;
    this.isOpen = !this.isOpen;
    
    if (this.isOpen && !wasOpen) {
      this.opened.emit();
      if (this.accordion) {
        this.accordion.onItemOpened(this);
      }
    } else if (!this.isOpen && wasOpen) {
      this.closed.emit();
    }
  }

  getButtonClasses(): { [key: string]: boolean } {
    if (this.isSeparated) {
      return {
        'rounded-lg': true,
        'shadow-sm': !this.isOpen,
        'rounded-b-none': this.isOpen,
        'shadow-none': this.isOpen,
        'border': true,
        'border-gray-200': true,
        'dark:border-gray-700': true,
        'bg-gray-100': true,
        'dark:bg-gray-800': true,
        'text-gray-900': true,
        'dark:text-white': true
      };
    } else {
      if (this.isFirst) {
        return {
          'rounded-t-lg': true,
          'border': true,
          'border-t-0': true,
          'border-x-0': true,
          'border-b-gray-200': true,
          'dark:border-b-gray-700': true,
          'bg-gray-100': true,
          'dark:bg-gray-800': true,
          'text-gray-900': true,
          'dark:text-white': true
        };
      } else if (!this.isLast) {
        return {
          'border': true,
          'border-x-0': true,
          'border-b-gray-200': true,
          'dark:border-b-gray-700': true,
          'border-t-0': true,
          'bg-gray-100': true,
          'dark:bg-gray-800': true,
          'text-gray-900': true,
          'dark:text-white': true
        };
      } else {
        return {
          'bg-gray-100': true,
          'dark:bg-gray-800': true,
          'text-gray-900': true,
          'dark:text-white': true
        };
      }
    }
  }
}

