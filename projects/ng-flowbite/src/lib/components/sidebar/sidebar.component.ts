import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside
      [id]="sidebarId"
      [class]="sidebarClasses"
      [attr.aria-label]="ariaLabel"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ng-content></ng-content>
      </div>
    </aside>
    <div
      *ngIf="overlay && isOpen"
      class="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
      (click)="close()"
    ></div>
  `
})
export class NgfSidebarComponent {
  @Input() sidebarId = `sidebar-${Math.random().toString(36).substr(2, 9)}`;
  @Input() position: 'left' | 'right' = 'left';
  @Input() overlay = true;
  @Input() backdrop = true;
  @Input() isOpen = false;
  @Input() ariaLabel = 'Sidebar';
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  get sidebarClasses(): string {
    const base = 'fixed top-0 z-40 h-screen transition-transform';
    const positionClass = this.position === 'left' ? 'left-0' : 'right-0';
    const widthClass = 'w-64';
    const transformClass = this.isOpen
      ? 'translate-x-0'
      : this.position === 'left' ? '-translate-x-full' : 'translate-x-full';
    return `${base} ${positionClass} ${widthClass} ${transformClass}`.trim();
  }

  open(): void {
    this.isOpen = true;
    this.opened.emit();
  }

  close(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isOpen && this.backdrop) {
      this.close();
    }
  }
}

@Component({
  selector: 'ngf-sidebar-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between mb-4">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfSidebarHeaderComponent {}

@Component({
  selector: 'ngf-sidebar-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="space-y-2 font-medium">
      <ng-content></ng-content>
    </ul>
  `
})
export class NgfSidebarContentComponent {}

@Component({
  selector: 'ngf-sidebar-item',
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
export class NgfSidebarItemComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() routerLinkActive = 'bg-gray-100 dark:bg-gray-700';
  @Input() active = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  get itemClasses(): string {
    const base = 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white';
    const activeClass = this.active
      ? 'bg-gray-100 dark:bg-gray-700'
      : 'hover:bg-gray-100 dark:hover:bg-gray-700';
    return `${base} ${activeClass}`.trim();
  }
}

@Component({
  selector: 'ngf-sidebar-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfSidebarFooterComponent {}

