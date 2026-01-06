import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfCardComponent {
  @Input() horizontal = false;
  @Input() imgSrc?: string;
  @Input() imgAlt?: string;

  get cardClasses(): string {
    const base = 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800';
    const direction = this.horizontal ? 'flex-row' : 'flex-col';
    return `${base} ${direction}`;
  }
}

@Component({
  selector: 'ngf-card-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col space-y-1.5 p-6">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfCardHeaderComponent {}

@Component({
  selector: 'ngf-card-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">
      <ng-content></ng-content>
    </h3>
  `
})
export class NgfCardTitleComponent {}

@Component({
  selector: 'ngf-card-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 pt-0">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfCardContentComponent {}

@Component({
  selector: 'ngf-card-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center p-6 pt-0">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfCardFooterComponent {}

@Component({
  selector: 'ngf-card-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      *ngIf="imgSrc"
      [src]="imgSrc"
      [alt]="imgAlt || ''"
      class="rounded-t-lg object-cover"
      [class.rounded-l-lg]="horizontal"
      [class.rounded-t-none]="horizontal"
      [class.w-full]="!horizontal"
      [class.h-auto]="!horizontal"
      [class.h-full]="horizontal"
      [class.w-48]="horizontal"
    />
  `
})
export class NgfCardImageComponent {
  @Input() imgSrc?: string;
  @Input() imgAlt?: string;
  @Input() horizontal = false;
}

