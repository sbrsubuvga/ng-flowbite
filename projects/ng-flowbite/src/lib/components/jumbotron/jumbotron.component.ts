import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-jumbotron',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [class]="jumbotronClasses">
      <div [class]="containerClasses">
        <h1 *ngIf="title" [class]="titleClasses">{{ title }}</h1>
        <p *ngIf="description" [class]="descriptionClasses">{{ description }}</p>
        <div *ngIf="showActions" [class]="actionsClasses">
          <ng-content select="[ngfJumbotronActions]"></ng-content>
        </div>
        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class NgfJumbotronComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() showActions = false;
  @Input() gradient = false;
  @Input() rounded = true;

  get jumbotronClasses(): string {
    const base = 'bg-white dark:bg-gray-900';
    const gradientClass = this.gradient
      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900'
      : '';
    const roundedClass = this.rounded ? 'rounded-lg' : '';
    return `${base} ${gradientClass} ${roundedClass}`.trim();
  }

  get containerClasses(): string {
    return 'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16';
  }

  get titleClasses(): string {
    return 'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
  }

  get descriptionClasses(): string {
    return 'mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400';
  }

  get actionsClasses(): string {
    return 'flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4';
  }
}

