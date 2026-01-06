import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngf-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [id]="carouselId" class="relative" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          *ngFor="let item of items; let i = index"
          [class]="getSlideClasses(i)"
          [attr.data-carousel-item]="i === currentIndex ? 'active' : null"
        >
          <img
            *ngIf="item.type === 'image'"
            [src]="item.src"
            [alt]="item.alt || ''"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
          <div *ngIf="item.type !== 'image'" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        (click)="previous()"
        aria-label="Previous slide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        (click)="next()"
        aria-label="Next slide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
      <div *ngIf="showIndicators" class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          *ngFor="let item of items; let i = index"
          type="button"
          [class]="getIndicatorClasses(i)"
          [attr.aria-current]="i === currentIndex"
          [attr.aria-label]="'Slide ' + (i + 1)"
          (click)="goToSlide(i)"
        ></button>
      </div>
    </div>
  `
})
export class NgfCarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;
  @Input() showIndicators = true;
  @Input() showControls = true;
  @Input() autoPlay = false;
  @Input() interval = 5000;
  @Input() currentIndex = 0;
  @Output() slideChange = new EventEmitter<number>();

  private destroy$ = new Subject<void>();
  private autoPlayInterval?: any;

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSlideClasses(index: number): string {
    const base = 'duration-700 ease-in-out';
    return index === this.currentIndex
      ? `${base} opacity-100`
      : `${base} opacity-0`;
  }

  getIndicatorClasses(index: number): string {
    const base = 'w-3 h-3 rounded-full';
    return index === this.currentIndex
      ? `${base} bg-white dark:bg-gray-800`
      : `${base} bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800`;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.slideChange.emit(this.currentIndex);
  }

  previous(): void {
    this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
    this.slideChange.emit(this.currentIndex);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.slideChange.emit(this.currentIndex);
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

export interface CarouselItem {
  type: 'image' | 'content';
  src?: string;
  alt?: string;
  template?: any;
}

