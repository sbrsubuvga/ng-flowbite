import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav aria-label="Page navigation">
      <ul class="inline-flex -space-x-px text-sm h-10">
        <li>
          <button
            type="button"
            [disabled]="currentPage === 1"
            (click)="goToPage(currentPage - 1)"
            [class]="prevButtonClasses"
          >
            Previous
          </button>
        </li>
        <li *ngFor="let page of visiblePages">
          <button
            type="button"
            (click)="goToPage(page)"
            [class]="getPageButtonClasses(page)"
            [attr.aria-current]="page === currentPage ? 'page' : null"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            type="button"
            [disabled]="currentPage === totalPages"
            (click)="goToPage(currentPage + 1)"
            [class]="nextButtonClasses"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  `
})
export class NgfPaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Input() showPages = 5;
  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): number[] {
    const pages: number[] = [];
    const half = Math.floor(this.showPages / 2);
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, start + this.showPages - 1);

    if (end - start < this.showPages - 1) {
      start = Math.max(1, end - this.showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  get prevButtonClasses(): string {
    const base = 'flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
    const disabled = this.currentPage === 1 ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${disabled}`.trim();
  }

  get nextButtonClasses(): string {
    const base = 'flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
    const disabled = this.currentPage === this.totalPages ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${disabled}`.trim();
  }

  getPageButtonClasses(page: number): string {
    const base = 'flex items-center justify-center px-3 h-10 leading-tight border border-gray-300';
    if (page === this.currentPage) {
      return `${base} text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`.trim();
    }
    return `${base} text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`.trim();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
}

