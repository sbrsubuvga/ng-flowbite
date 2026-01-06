import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngf-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer [class]="footerClasses">
      <div [class]="containerClasses">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <ng-content></ng-content>
        </div>
        <div [class]="dividerClasses"></div>
        <div [class]="copyrightClasses">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {{ currentYear }} <a [href]="brandHref" class="hover:underline">{{ brandName }}</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  `
})
export class NgfFooterComponent {
  @Input() brandName = 'Flowbite';
  @Input() brandHref = 'https://flowbite.com/';
  @Input() dark = false;

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get footerClasses(): string {
    const base = 'bg-white rounded-lg shadow dark:bg-gray-800';
    return base;
  }

  get containerClasses(): string {
    return 'w-full mx-auto max-w-screen-xl p-4 md:py-8';
  }

  get dividerClasses(): string {
    return 'my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8';
  }

  get copyrightClasses(): string {
    return 'sm:flex sm:items-center sm:justify-between';
  }
}

@Component({
  selector: 'ngf-footer-brand',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h2 [class]="brandClasses">
        <a [href]="href" [routerLink]="routerLink" class="flex items-center">
          <img *ngIf="imgSrc" [src]="imgSrc" [alt]="alt" [class]="imgClasses" />
          <span *ngIf="brandName">{{ brandName }}</span>
        </a>
      </h2>
      <p *ngIf="description" [class]="descriptionClasses">
        {{ description }}
      </p>
    </div>
  `
})
export class NgfFooterBrandComponent {
  @Input() brandName?: string;
  @Input() imgSrc?: string;
  @Input() alt?: string;
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() description?: string;

  get brandClasses(): string {
    return 'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white';
  }

  get imgClasses(): string {
    return 'h-8 me-3';
  }

  get descriptionClasses(): string {
    return 'mb-4 text-gray-500 dark:text-gray-400';
  }
}

@Component({
  selector: 'ngf-footer-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 [class]="titleClasses">
      <ng-content></ng-content>
    </h2>
  `
})
export class NgfFooterTitleComponent {
  get titleClasses(): string {
    return 'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white';
  }
}

@Component({
  selector: 'ngf-footer-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <li>
      <a
        [href]="href"
        [routerLink]="routerLink"
        [class]="linkClasses"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class NgfFooterLinkComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];

  get linkClasses(): string {
    return 'hover:underline text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400';
  }
}

@Component({
  selector: 'ngf-footer-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul [class]="linksClasses">
      <ng-content></ng-content>
    </ul>
  `
})
export class NgfFooterLinksComponent {
  get linksClasses(): string {
    return 'text-gray-500 dark:text-gray-400 font-medium';
  }
}

