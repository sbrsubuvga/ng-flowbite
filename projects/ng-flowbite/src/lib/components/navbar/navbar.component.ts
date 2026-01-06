import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class]="navbarClasses">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a [href]="brandHref" [routerLink]="brandRouterLink" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img *ngIf="brandImgSrc" [src]="brandImgSrc" [alt]="brandAlt" class="h-8" />
          <span *ngIf="brandText" [class]="brandTextClasses">{{ brandText }}</span>
        </a>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          (click)="toggleMobileMenu()"
          aria-controls="navbar-default"
          [attr.aria-expanded]="isMobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div
          [class.hidden]="!isMobileMenuOpen"
          class="w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <ng-content></ng-content>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NgfNavbarComponent {
  @Input() brandText?: string;
  @Input() brandImgSrc?: string;
  @Input() brandAlt?: string;
  @Input() brandHref?: string;
  @Input() brandRouterLink?: string;
  @Input() solid = false;
  @Output() mobileMenuToggle = new EventEmitter<boolean>();

  isMobileMenuOpen = false;

  get navbarClasses(): string {
    const base = 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700';
    const solidClass = this.solid ? 'border-b' : '';
    return `${base} ${solidClass}`.trim();
  }

  get brandTextClasses(): string {
    return 'self-center text-xl font-semibold whitespace-nowrap dark:text-white';
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);
  }
}

@Component({
  selector: 'ngf-navbar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <li>
      <a
        [href]="href"
        [routerLink]="routerLink"
        [routerLinkActive]="routerLinkActive"
        [class]="itemClasses"
        (click)="onClick.emit($event)"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class NgfNavbarItemComponent {
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() routerLinkActive = 'text-blue-700 md:text-blue-700 md:dark:text-blue-500';
  @Input() active = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  get itemClasses(): string {
    const base = 'block py-2 px-3 rounded md:p-0';
    const activeClass = this.active
      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    return `${base} ${activeClass}`.trim();
  }
}

