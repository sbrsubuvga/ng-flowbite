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
    <nav [ngClass]="getBreadcrumbClasses()" aria-label="Breadcrumb">
      <ol [ngClass]="getBreadcrumbContentClasses()">
        <li *ngFor="let item of items; let i = index" [ngClass]="getBreadcrumbItemClasses(i)">
          <ng-container *ngIf="i > 0">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </ng-container>
          <a
            *ngIf="item.href || item.routerLink; else span"
            [href]="item.href"
            [routerLink]="item.routerLink"
            [ngClass]="getBreadcrumbLinkClasses(i)"
          >
            <ng-container *ngIf="i === 0">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
            </ng-container>
            {{ item.label }}
          </a>
          <ng-template #span>
            <span [ngClass]="getBreadcrumbSpanClasses()">{{ item.label }}</span>
          </ng-template>
        </li>
      </ol>
    </nav>
  `
})
export class NgfBreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Input() color: 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary' = 'default';
  @Input() solid = false;

  getBreadcrumbClasses(): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'inline-flex': true,
      'items-center': true,
      'gap-1': true,
      'rounded-lg': true,
      'px-5': true,
      'py-3': true,
      'transition': true
    };

    if (this.solid) {
      baseClasses['border'] = true;
      const colorClasses = this._getSolidColorClasses();
      Object.assign(baseClasses, colorClasses);
    } else {
      baseClasses['border-none'] = true;
      baseClasses['bg-transparent'] = true;
    }

    return baseClasses;
  }

  getBreadcrumbContentClasses(): { [key: string]: boolean } {
    return {
      'inline-flex': true,
      'items-center': true,
      'space-x-1': true,
      'md:space-x-2': true
    };
  }

  getBreadcrumbItemClasses(index: number): { [key: string]: boolean } {
    const baseClasses: { [key: string]: boolean } = {
      'inline-flex': true,
      'items-center': true
    };
    return baseClasses;
  }

  getBreadcrumbLinkClasses(index: number): { [key: string]: boolean } {
    const isLast = index === this.items.length - 1;
    const baseClasses: { [key: string]: boolean } = {
      'inline-flex': true,
      'items-center': true,
      'text-sm': true,
      'font-medium': true
    };

    if (isLast) {
      baseClasses['text-gray-500'] = true;
      baseClasses['dark:text-gray-400'] = true;
    } else {
      const colorClasses = this._getLinkColorClasses();
      Object.assign(baseClasses, colorClasses);
    }

    return baseClasses;
  }

  getBreadcrumbSpanClasses(): { [key: string]: boolean } {
    return {
      'ms-1': true,
      'text-sm': true,
      'font-medium': true,
      'text-gray-500': true,
      'md:ms-2': true,
      'dark:text-gray-400': true
    };
  }

  private _getSolidColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'border-gray-300': true,
        'bg-gray-100': true,
        'dark:border-gray-900': true,
        'dark:bg-gray-800': true
      },
      info: {
        'border-blue-300': true,
        'bg-blue-100': true,
        'dark:border-blue-900': true,
        'dark:bg-blue-800': true
      },
      failure: {
        'border-red-300': true,
        'bg-red-100': true,
        'dark:border-red-900': true,
        'dark:bg-red-800': true
      },
      success: {
        'border-green-300': true,
        'bg-green-100': true,
        'dark:border-green-900': true,
        'dark:bg-green-800': true
      },
      warning: {
        'border-yellow-300': true,
        'bg-yellow-100': true,
        'dark:border-yellow-900': true,
        'dark:bg-yellow-800': true
      },
      primary: {
        'border-primary-300': true,
        'bg-primary-100': true,
        'dark:border-primary-900': true,
        'dark:bg-primary-800': true
      }
    };
    return colors[this.color] || colors['default'];
  }

  private _getLinkColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      default: {
        'text-gray-700': true,
        'hover:text-gray-900': true,
        'dark:text-gray-100': true,
        'dark:hover:text-white': true
      },
      info: {
        'text-blue-700': true,
        'hover:text-blue-900': true,
        'dark:text-blue-100': true,
        'dark:hover:text-blue-300': true
      },
      failure: {
        'text-red-700': true,
        'hover:text-red-900': true,
        'dark:text-red-100': true,
        'dark:hover:text-red-300': true
      },
      success: {
        'text-green-700': true,
        'hover:text-green-900': true,
        'dark:text-green-100': true,
        'dark:hover:text-green-300': true
      },
      warning: {
        'text-yellow-700': true,
        'hover:text-yellow-900': true,
        'dark:text-yellow-100': true,
        'dark:hover:text-yellow-300': true
      },
      primary: {
        'text-primary-700': true,
        'hover:text-primary-900': true,
        'dark:text-primary-100': true,
        'dark:hover:text-primary-300': true
      }
    };
    return colors[this.color] || colors['default'];
  }
}

