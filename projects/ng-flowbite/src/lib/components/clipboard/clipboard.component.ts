import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-clipboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="inputId"
        [class]="labelClasses"
      >
        {{ label }}
      </label>
      <div class="flex">
        <input
          [id]="inputId"
          type="text"
          [class]="inputClasses"
          [value]="value"
          [readonly]="true"
          [attr.aria-label]="ariaLabel"
        />
        <button
          type="button"
          [class]="buttonClasses"
          (click)="copyToClipboard()"
          [attr.aria-label]="buttonLabel"
        >
          <svg
            *ngIf="!isCopied"
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.5 3.5h3M7.5 3.5v2m0-2h-3m3 2v2m-3 0h3m-3 0v2m3-2h3m-3 0v-2m0 2h-3m3 0h3M7.5 3.5H4.5A1.5 1.5 0 0 0 3 5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V5a1.5 1.5 0 0 0-1.5-1.5h-3Z"/>
          </svg>
          <svg
            *ngIf="isCopied"
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
          <span class="sr-only">{{ buttonLabel }}</span>
        </button>
      </div>
      <p *ngIf="helperText" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `
})
export class NgfClipboardComponent {
  @Input() value = '';
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() buttonLabel = 'Copy to clipboard';
  @Input() ariaLabel = 'Copy';
  @Input() inputId = `clipboard-${Math.random().toString(36).substr(2, 9)}`;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() copied = new EventEmitter<string>();

  private _copiedState = false;

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get inputClasses(): string {
    const base = 'block p-2.5 text-sm text-gray-900 bg-gray-50 border border-e-0 border-gray-300 rounded-s-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-2.5',
      lg: 'p-4'
    };
    return `${base} ${sizeClasses[this.size]}`.trim();
  }

  get buttonClasses(): string {
    const base = 'p-2.5 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-2.5',
      lg: 'p-4'
    };
    return `${base} ${sizeClasses[this.size]}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  get isCopied(): boolean {
    return this._copiedState;
  }

  async copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.value);
      this._copiedState = true;
      this.copied.emit(this.value);
      setTimeout(() => {
        this._copiedState = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }
}

