import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <button
        *ngFor="let star of stars; let i = index"
        type="button"
        [class]="getStarClasses(i)"
        (click)="onStarClick(i + 1)"
        (mouseenter)="onStarHover(i + 1)"
        (mouseleave)="onStarLeave()"
        [attr.aria-label]="'Rate ' + (i + 1) + ' out of ' + maxStars"
      >
        <svg
          class="w-4 h-4 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </button>
      <p *ngIf="showText" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {{ rating }} out of {{ maxStars }}
      </p>
    </div>
  `
})
export class NgfRatingComponent {
  @Input() rating = 0;
  @Input() maxStars = 5;
  @Input() readonly = false;
  @Input() showText = false;
  @Output() ratingChange = new EventEmitter<number>();

  hoveredRating = 0;

  get stars(): number[] {
    return Array(this.maxStars).fill(0).map((_, i) => i);
  }

  getStarClasses(index: number): string {
    const starValue = index + 1;
    const isActive = this.hoveredRating > 0
      ? starValue <= this.hoveredRating
      : starValue <= this.rating;

    const base = 'text-gray-300 cursor-pointer dark:text-gray-500';
    const active = isActive ? 'text-yellow-300 dark:text-yellow-500' : '';
    const readonlyClass = this.readonly ? 'cursor-default' : 'hover:text-yellow-300 dark:hover:text-yellow-500';

    return `${base} ${active} ${readonlyClass}`.trim();
  }

  onStarClick(value: number): void {
    if (!this.readonly) {
      this.rating = value;
      this.ratingChange.emit(value);
    }
  }

  onStarHover(value: number): void {
    if (!this.readonly) {
      this.hoveredRating = value;
    }
  }

  onStarLeave(): void {
    if (!this.readonly) {
      this.hoveredRating = 0;
    }
  }
}

