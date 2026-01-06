import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryImage {
  src: string;
  alt?: string;
  thumbnail?: string;
  title?: string;
}

@Component({
  selector: 'ngf-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="galleryClasses">
      <div class="grid gap-4" [class]="gridClasses">
        <div
          *ngFor="let image of images; let i = index"
          [class]="getImageWrapperClasses(i)"
          (click)="openLightbox(i)"
        >
          <img
            [src]="image.thumbnail || image.src"
            [alt]="image.alt || ''"
            [class]="imageClasses"
            [loading]="loading"
          />
          <div *ngIf="image.title" [class]="overlayClasses">
            <p [class]="titleClasses">{{ image.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      *ngIf="showLightbox && selectedImageIndex !== null"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      (click)="closeLightbox()"
    >
      <div class="relative max-w-4xl max-h-full p-4" (click)="$event.stopPropagation()">
        <button
          type="button"
          class="absolute top-4 right-4 text-white hover:text-gray-300"
          (click)="closeLightbox()"
          aria-label="Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img
          *ngIf="selectedImage"
          [src]="selectedImage!.src"
          [alt]="selectedImage!.alt || ''"
          class="max-w-full max-h-[90vh] rounded-lg"
        />
        <div *ngIf="images.length > 1" class="flex justify-between mt-4">
          <button
            type="button"
            class="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
            (click)="previousImage()"
          >
            Previous
          </button>
          <button
            type="button"
            class="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
            (click)="nextImage()"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  `
})
export class NgfGalleryComponent {
  @Input() images: GalleryImage[] = [];
  @Input() columns: 1 | 2 | 3 | 4 | 5 | 6 = 3;
  @Input() showLightbox = true;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() rounded = true;
  @Output() imageClick = new EventEmitter<{ image: GalleryImage; index: number }>();

  selectedImageIndex: number | null = null;

  get galleryClasses(): string {
    return 'w-full';
  }

  get gridClasses(): string {
    const gridMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6'
    };
    return gridMap[this.columns];
  }

  get imageClasses(): string {
    const base = 'w-full h-auto object-cover cursor-pointer';
    const roundedClass = this.rounded ? 'rounded-lg' : '';
    return `${base} ${roundedClass}`.trim();
  }

  get overlayClasses(): string {
    return 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg';
  }

  get titleClasses(): string {
    return 'text-white text-lg font-semibold';
  }

  get selectedImage(): GalleryImage | null {
    return this.selectedImageIndex !== null ? this.images[this.selectedImageIndex] : null;
  }

  getImageWrapperClasses(index: number): string {
    return 'relative overflow-hidden';
  }

  openLightbox(index: number): void {
    if (this.showLightbox) {
      this.selectedImageIndex = index;
      this.imageClick.emit({ image: this.images[index], index });
    }
  }

  closeLightbox(): void {
    this.selectedImageIndex = null;
  }

  nextImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
    }
  }

  previousImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = this.selectedImageIndex === 0
        ? this.images.length - 1
        : this.selectedImageIndex - 1;
    }
  }
}

