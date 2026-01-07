import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  routerLink?: string;
}

@Component({
  selector: 'ngf-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li *ngFor="let item of items; let i = index" class="inline-flex items-center">
          <ng-container *ngIf="i > 0">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </ng-container>
          <a
            *ngIf="item.href || item.routerLink; else span"
            [href]="item.href"
            [routerLink]="item.routerLink"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            [class.text-gray-500]="i === items.length - 1"
            [class.dark:text-gray-500]="i === items.length - 1"
          >
            <ng-container *ngIf="i === 0">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
            </ng-container>
            {{ item.label }}
          </a>
          <ng-template #span>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{ item.label }}</span>
          </ng-template>
        </li>
      </ol>
    </nav>
  `
})
export class NgfBreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}

