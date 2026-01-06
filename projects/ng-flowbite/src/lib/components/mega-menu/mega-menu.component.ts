import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-mega-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [id]="buttonId"
      [class]="buttonClasses"
      (click)="toggle()"
      [attr.aria-expanded]="isOpen"
      [attr.aria-controls]="menuId"
    >
      {{ label }}
      <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    <div
      [id]="menuId"
      [class]="menuClasses"
      [attr.aria-labelledby]="buttonId"
    >
      <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class NgfMegaMenuComponent {
  @Input() label = 'Mega menu';
  @Input() buttonId = `mega-menu-button-${Math.random().toString(36).substr(2, 9)}`;
  @Input() menuId = `mega-menu-${Math.random().toString(36).substr(2, 9)}`;
  @Input() isOpen = false;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  get buttonClasses(): string {
    const base = 'flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    return base;
  }

  get menuClasses(): string {
    const base = 'absolute z-10 grid w-auto grid-cols-1 p-2 mt-2 font-normal bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-800';
    const visibilityClass = this.isOpen ? 'block' : 'hidden';
    return `${base} ${visibilityClass}`.trim();
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !(event.target as HTMLElement).closest(`#${this.menuId}`) && !(event.target as HTMLElement).closest(`#${this.buttonId}`)) {
      this.isOpen = false;
      this.closed.emit();
    }
  }
}

@Component({
  selector: 'ngf-mega-menu-column',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul [class]="columnClasses">
      <ng-content></ng-content>
    </ul>
  `
})
export class NgfMegaMenuColumnComponent {
  get columnClasses(): string {
    return 'space-y-4 sm:mb-4 sm:space-y-0';
  }
}

@Component({
  selector: 'ngf-mega-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <li>
      <a
        [href]="href"
        [routerLink]="routerLink"
        [class]="itemClasses"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class NgfMegaMenuItemComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];

  get itemClasses(): string {
    return 'block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-blue-500';
  }
}

@Component({
  selector: 'ngf-mega-menu-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 [class]="titleClasses">
      <ng-content></ng-content>
    </h3>
  `
})
export class NgfMegaMenuTitleComponent {
  get titleClasses(): string {
    return 'mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white';
  }
}

